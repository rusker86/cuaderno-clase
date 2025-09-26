// Ej36 — DOM + Fetch (starter)

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
  // let controller; // (opcional) AbortController

  // helpers UI
  function setStatus(msg) {
    status.textContent = msg || "";
  }
  function setLoadingList(isLoading) {
    listCard.setAttribute("aria-busy", String(isLoading));
  }

  // TODO: implementar fetchList(page) → pide /posts?_limit=10&_page=page
  // - manejar loading y errores
  // - renderizar li con botón "Ver" (data-id)

  // TODO: implementar fetchDetail(id) → /posts/:id
  // - mostrar loading en el área de detalle
  // - manejar errores

  // TODO: eventos
  // - click en prev/next para cambiar página (deshabilitar prev en 1)
  // - delegación de clicks en #posts para botones "Ver" (data-id)
  // - submit del formulario para crear post (POST /posts)

  // Sugerencias:
  // - usa try/catch + response.ok
  // - usa JSON.stringify en body y Content-Type application/json
})();
