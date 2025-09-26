// Ej38 — DOM avanzado (solución)
(() => {
  const $ = (s, sc = document) => sc.querySelector(s);
  const $$ = (s, sc = document) => Array.from(sc.querySelectorAll(s));
  const log = $("#log");

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Util: ligeras ayudas
  const setLog = (txt) => (log.textContent = txt || "");
  const once = (el, ev, fn) => el.addEventListener(ev, fn, { once: true });

  /* 1) Lazy-loading de imágenes */
  const imgs = $$("#gallery img[data-src]");
  const imgObserver = new IntersectionObserver(
    (entries, obs) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const img = e.target;
        const real = img.dataset.src;
        if (!real) {
          obs.unobserve(img);
          continue;
        }
        // cuando cargue, marcamos .loaded
        once(img, "load", () => img.classList.add("loaded"));
        img.src = real;
        img.removeAttribute("data-src");
        obs.unobserve(img);
      }
    },
    { root: null, rootMargin: "200px 0px", threshold: 0 }
  );
  imgs.forEach((img) => imgObserver.observe(img));

  /* 2) Revelar secciones al hacer scroll */
  const sections = $$("section.reveal");
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.remove("reveal");
        obs.unobserve(e.target);
      }
    },
    {
      root: null,
      rootMargin: "0px 0px -5% 0px",
      threshold: prefersReduced ? 0 : 0.1,
    }
  );
  if (prefersReduced) {
    // Mostrar sin animación
    sections.forEach((s) => s.classList.remove("reveal"));
  } else {
    sections.forEach((s) => revealObserver.observe(s));
  }

  /* 3) Infinite scroll con sentinel */
  const feed = $("#feed");
  let total = 0;
  const MAX = 30;

  function addItems(n = 5) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < n && total < MAX; i++) {
      total++;
      const art = document.createElement("article");
      art.innerHTML = `<h4>Item #${total}</h4><p>Contenido generado.</p>`;
      frag.appendChild(art);
    }
    feed.appendChild(frag);
    setLog(`Items: ${total}/${MAX}`);
  }

  // arranque con 5
  addItems(5);

  const sentinel = $("#sentinel");
  let infinitePaused = false;

  const infiniteObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting || infinitePaused) continue;
        if (total >= MAX) {
          setLog("Límite alcanzado. Infinite scroll detenido.");
          infiniteObserver.disconnect();
          return;
        }
        // simular latencia de red
        setLog("Cargando más…");
        setTimeout(() => addItems(5), 350);
      }
    },
    { root: null, rootMargin: "300px 0px", threshold: 0 }
  );
  infiniteObserver.observe(sentinel);

  /* 4) MutationObserver */
  // a) nuevos <article> en #feed
  const feedObserver = new MutationObserver((mutList) => {
    for (const m of mutList) {
      if (m.type === "childList" && m.addedNodes.length) {
        const addedArticles = Array.from(m.addedNodes).filter(
          (n) => n.nodeName === "ARTICLE"
        );
        if (addedArticles.length) {
          console.log(
            `nuevo item (+${addedArticles.length}) — total ahora:`,
            feed.children.length
          );
        }
      }
      if (m.type === "attributes" && m.attributeName === "src") {
        console.log("img src cambiado:", m.target.getAttribute("src"));
      }
    }
  });
  feedObserver.observe(feed, { childList: true, subtree: false });

  // b) vigilar cambios de src en cualquier img de la galería
  $$("#gallery img").forEach((img) => {
    feedObserver.observe(img, { attributes: true, attributeFilter: ["src"] });
  });

  /* 5) Limpieza manual */
  $("#stop").addEventListener("click", () => {
    imgObserver.disconnect();
    revealObserver.disconnect();
    infiniteObserver.disconnect();
    feedObserver.disconnect();
    setLog("Observadores detenidos.");
  });

  /* 6) Opcional: pausar infinite scroll si pestaña oculta */
  document.addEventListener("visibilitychange", () => {
    infinitePaused = document.hidden;
    setLog(
      infinitePaused ? "En pausa (pestaña oculta)" : `Items: ${total}/${MAX}`
    );
  });
})();
