// Ej36 — DOM + Fetch (solución)
(() => {
  const API = "https://jsonplaceholder.typicode.com";
  const $ = (sel, sc = document) => sc.querySelector(sel);

  // refs
  const status = $("#status");
  const postsUl = $("#posts");
  const pageEl = $("#page");
  const prevBtn = $("#prev");
  const nextBtn = $("#next");
  const listCard = $("#list-card");
  const detail = $("#detail");
  const form = $("#new-post");
  const createResult = $("#create-result");

  // estado
  let page = 1;
  let controller = null; // AbortController (opcional)

  function setStatus(msg) {
    status.textContent = msg || "";
  }
  function setLoadingList(isLoading) {
    listCard.setAttribute("aria-busy", String(isLoading));
  }

  function renderPosts(items) {
    postsUl.innerHTML = "";
    const frag = document.createDocumentFragment();
    for (const p of items) {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="post">
          <h4>${escapeHtml(p.title)}</h4>
          <button type="button" data-id="${p.id}">Ver</button>
        </div>
      `;
      frag.appendChild(li);
    }
    postsUl.appendChild(frag);
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  async function fetchList(pageNum = 1) {
    // cancelar petición anterior si existe
    if (controller) controller.abort();
    controller = new AbortController();

    setLoadingList(true);
    setStatus("Cargando listado…");
    try {
      const url = `${API}/posts?_limit=10&_page=${pageNum}`;
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error(`Error de red (${res.status})`);
      const data = await res.json();
      renderPosts(data);
      pageEl.textContent = `pág. ${pageNum}`;
      prevBtn.disabled = pageNum <= 1;
      setStatus("");
    } catch (e) {
      if (e.name === "AbortError") {
        // petición cancelada: no mostrar error
        return;
      }
      setStatus(`⚠️ ${e.message}`);
      postsUl.innerHTML = "";
    } finally {
      setLoadingList(false);
    }
  }

  async function fetchDetail(id) {
    detail.setAttribute("aria-busy", "true");
    detail.textContent = "Cargando detalle…";
    try {
      const res = await fetch(`${API}/posts/${id}`);
      if (!res.ok) throw new Error(`No se pudo cargar el post #${id}`);
      const post = await res.json();
      detail.innerHTML = `
        <h3>${escapeHtml(post.title)}</h3>
        <p>${escapeHtml(post.body)}</p>
        <p class="muted">ID: ${post.id}</p>
      `;
    } catch (e) {
      detail.innerHTML = `<p style="color:#b91c1c">${escapeHtml(
        e.message
      )}</p>`;
    } finally {
      detail.setAttribute("aria-busy", "false");
    }
  }

  async function createPost(payload) {
    createResult.textContent = "Enviando…";
    try {
      const res = await fetch(`${API}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Fallo creando post (${res.status})`);
      const data = await res.json();
      createResult.textContent = `✅ Creado #${data.id}: ${payload.title}`;
      return data;
    } catch (e) {
      createResult.textContent = `⚠️ ${e.message}`;
      throw e;
    }
  }

  // eventos
  prevBtn.addEventListener("click", () => {
    if (page > 1) {
      page--;
      fetchList(page);
    }
  });
  nextBtn.addEventListener("click", () => {
    page++;
    fetchList(page);
  });

  // delegación para botones "Ver"
  postsUl.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-id]");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (Number.isFinite(id)) fetchDetail(id);
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const title = fd.get("title")?.toString().trim();
    const body = fd.get("body")?.toString().trim();
    if (!title || !body) {
      createResult.textContent = "⚠️ Título y contenido son obligatorios.";
      return;
    }
    try {
      await createPost({ title, body, userId: 1 });
      form.reset();
    } catch {
      // error ya mostrado en createResult
    }
  });

  // inicio
  fetchList(page);
})();
