# Ejercicio 20 — Contenido embebido con `<iframe>`

Objetivo: aprender a incrustar contenido externo con `<iframe>` aplicando **buenas prácticas de accesibilidad y seguridad**.

## Requisitos mínimos

1. Crea un documento con:
   - `h1` y breve introducción.
   - Un `<iframe>` que incruste un **vídeo** (por ejemplo, de YouTube o un reproductor ficticio):
     - Atributos obligatorios: `title`, `width`, `height`.
     - Buenas prácticas: `loading="lazy"`, `referrerpolicy="strict-origin-when-cross-origin"` (o `no-referrer`), `allow` apropiado (p. ej., `fullscreen; picture-in-picture`).
   - Un `<iframe>` que incruste un **mapa** (puede ser URL de ejemplo o de Google Maps embed):
     - Incluye `title`, `loading="lazy"`.
   - Un `<iframe>` que muestre un **documento** local ficticio (por ejemplo `docs/guia.pdf` o `docs/indice.html`):
     - Incluye `title` y un **enlace alternativo** justo debajo por si el iframe no carga.
2. Añade un ejemplo de `<iframe>` con **política de seguridad**:
   - Usa `sandbox` con una combinación mínima (por ejemplo: `sandbox="allow-same-origin allow-scripts"`) y explica en un comentario para qué sirve.
3. Añade **texto alternativo** dentro de cada `<iframe>` explicando el contenido (fallback para navegadores muy antiguos o bloqueadores).
4. Cierra con una pequeña sección de **buenas prácticas** en un párrafo o lista corta dentro del HTML (sin CSS/JS).

## Pistas

- `title` es **obligatorio** por accesibilidad (describe el contenido del iframe).
- `loading="lazy"` ayuda al rendimiento.
- `referrerpolicy` controla qué cabecera `Referer` se envía.
- `allow` habilita capacidades (e.g., `fullscreen`); ajusta solo lo necesario.
- `sandbox` restringe capacidades del contenido embebido (por defecto muy limitado; ve habilitando lo justo).

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
