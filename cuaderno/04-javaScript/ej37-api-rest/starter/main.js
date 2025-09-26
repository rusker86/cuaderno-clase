// Ej37 — API REST (starter)

(() => {
  const API = "https://jsonplaceholder.typicode.com";
  const FAKE_TOKEN = "FAKE_TOKEN";

  // 1) Cliente API reutilizable
  // TODO: apiFetch(path, options) con headers por defecto, Authorization, manejo de !res.ok

  // 6) Reintentos con backoff
  // TODO: withRetry(fn, { retries, baseDelay }) que reintente en 5xx o errores de red

  // 7) AbortController / Timeout
  // TODO: withTimeout(ms, fetchFn) que aborte si excede el tiempo

  // Helpers utilitarios (sugeridos)
  // function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

  // 2) GET con query params (_limit, _page)
  // TODO: usar apiFetch + withTimeout/withRetry

  // 3) POST (crear)
  // TODO: POST /posts { title, body, userId } (log optimista opcional)

  // 4) PUT o PATCH (actualizar)
  // TODO: actualizar un id concreto

  // 5) DELETE
  // TODO: eliminar un id concreto (log optimista opcional)

  // 9) (Opcional) Paginación
  // TODO: repetir GET con page=2 y comparar

  // Sugerencia de flujo de pruebas (puedes cambiar el orden):
  // (async function run(){ ... })();
})();
