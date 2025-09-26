// Ej38 — DOM avanzado (starter)
(() => {
  const $ = (s, sc = document) => sc.querySelector(s);
  const $$ = (s, sc = document) => Array.from(sc.querySelectorAll(s));
  const log = $("#log");

  // 1) Lazy images: observar imgs con data-src
  // SUGERENCIA:
  // const imgObserver = new IntersectionObserver((entries, obs) => { ... }, { rootMargin:"200px 0px", threshold: 0 });
  // - cuando intersecta: asignar src desde dataset, onload => .loaded, obs.unobserve(img)

  // 2) Reveal secciones
  // - observar .reveal y quitar esa clase al intersectar
  // - si prefers-reduced-motion: quizá quitar reveal inmediatamente

  // 3) Infinite scroll: sentinela al final
  // - observar #sentinel; al intersectar => añadir 5 <article> en #feed
  // - parar cuando haya >= 30 artículos

  // 4) MutationObserver:
  // - observar #feed: childList true → al añadir article loguear
  // - observar attributes de <img> (src): attributeFilter: ["src"]

  // 5) Limpieza:
  // - botón #stop → .disconnect() a todos los observers

  // 6) (Opcional) visibilitychange:
  // - pausar/reanudar el observer de infinite scroll si pestaña oculta

  // TODO: implementa los observadores arriba descritos.
})();
