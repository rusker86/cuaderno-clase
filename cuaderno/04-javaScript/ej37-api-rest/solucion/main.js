// Ej37 — API REST (solución)

(() => {
  const API = "https://jsonplaceholder.typicode.com";
  const FAKE_TOKEN = "FAKE_TOKEN";

  // Util
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const isNetworkError = (err) =>
    err.name === "TypeError" || err.name === "AbortError";
  const isRetriableStatus = (status) => status >= 500 && status <= 599;

  // 1) Cliente API reutilizable
  async function apiFetch(
    path,
    { method = "GET", headers = {}, body, signal } = {}
  ) {
    const opts = {
      method,
      headers: {
        ...(body ? { "Content-Type": "application/json; charset=utf-8" } : {}),
        Authorization: `Bearer ${FAKE_TOKEN}`,
        ...headers,
      },
      signal,
      body: body ? JSON.stringify(body) : undefined,
    };

    const res = await fetch(`${API}${path}`, opts);
    // Lanzar error si no OK
    if (!res.ok) {
      const text = await safeText(res);
      const err = new Error(
        `HTTP ${res.status} ${res.statusText} — ${text || "(sin cuerpo)"}`
      );
      err.status = res.status;
      throw err;
    }
    // para DELETE JSONPlaceholder devuelve {} o vacío
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return res.json();
    }
    return res.text();
  }

  async function safeText(res) {
    try {
      return await res.text();
    } catch {
      return "";
    }
  }

  // 6) Reintentos con backoff
  async function withRetry(fn, { retries = 2, baseDelay = 200 } = {}) {
    let intento = 0;
    while (true) {
      try {
        return await fn();
      } catch (e) {
        const status = e.status ?? 0;
        const retriable = isNetworkError(e) || isRetriableStatus(status);
        const puedeReintentar = intento < retries && retriable;
        console.warn(
          `Intento ${intento + 1} falló: ${e.message} — retriable=${retriable}`
        );
        if (!puedeReintentar) throw e;
        const delay = baseDelay * 2 ** intento;
        await sleep(delay);
        intento++;
      }
    }
  }

  // 7) Timeout con AbortController
  async function withTimeout(ms, task) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    try {
      return await task(ctrl.signal);
    } finally {
      clearTimeout(timer);
    }
  }

  // 2) GET con query (_limit, _page)
  async function getPosts({ limit = 5, page = 1 } = {}) {
    return withRetry(
      () =>
        withTimeout(5000, (signal) =>
          apiFetch(`/posts?_limit=${limit}&_page=${page}`, { signal })
        ),
      { retries: 2, baseDelay: 250 }
    );
  }

  // 3) POST (crear)
  async function createPost({ title, body, userId }) {
    return withRetry(
      () =>
        apiFetch(`/posts`, { method: "POST", body: { title, body, userId } }),
      { retries: 1, baseDelay: 300 }
    );
  }

  // 4) PUT / PATCH
  async function updatePost(id, patch) {
    // Cambia a PUT si quieres enviar el recurso completo
    return withRetry(
      () => apiFetch(`/posts/${id}`, { method: "PATCH", body: patch }),
      { retries: 1, baseDelay: 300 }
    );
  }

  // 5) DELETE
  async function deletePost(id) {
    return withRetry(() => apiFetch(`/posts/${id}`, { method: "DELETE" }), {
      retries: 1,
      baseDelay: 300,
    });
  }

  // 8) (Opcional) Optimistic UI (solo logging)
  function optimistic(action, { onRollback }) {
    console.log(`🟢 [optimista] ${action}`);
    return (e) => {
      console.warn(`🔴 [revertir] ${action} → ${e?.message || e}`);
      onRollback?.(e);
    };
  }

  (async function run() {
    try {
      console.log("== GET page=1 ==");
      const list1 = await getPosts({ limit: 5, page: 1 });
      list1.forEach((p) => console.log(`#${p.id}: ${p.title}`));

      console.log("== GET page=2 (paginación) ==");
      const list2 = await getPosts({ limit: 5, page: 2 });
      list2.forEach((p) => console.log(`#${p.id}: ${p.title}`));

      console.log("== POST (crear) ==");
      // Optimista: “añadido en UI local…”
      const rollbackCreate = optimistic("crear post local");
      let created;
      try {
        created = await createPost({
          title: "Mi post nuevo",
          body: "Contenido de ejemplo",
          userId: 1,
        });
        console.log("Creado (API):", created);
      } catch (e) {
        rollbackCreate(e);
      }

      console.log("== PATCH (actualizar) ==");
      const idToUpdate = created?.id ?? 1;
      const updated = await updatePost(idToUpdate, {
        title: "Título actualizado",
      });
      console.log("Actualizado:", updated);

      console.log("== DELETE ==");
      const idToDelete = created?.id ?? 1;
      const rollbackDelete = optimistic(`borrar post #${idToDelete} local`);
      try {
        const del = await deletePost(idToDelete);
        console.log("Eliminado (API):", del);
      } catch (e) {
        rollbackDelete(e);
      }

      console.log("== GET con timeout corto (demostración) ==");
      try {
        // Timeout forzado muy bajo solo para demo (puede o no abortar según red)
        const data = await withTimeout(1, (signal) =>
          apiFetch(`/posts?_limit=1`, { signal })
        );
        console.log("Llegó a tiempo:", data);
      } catch (e) {
        console.warn("Timeout/Abort demo:", e.name, e.message);
      }
    } catch (e) {
      console.error("⛔ Error global en run():", e.message);
    }
  })();
})();
