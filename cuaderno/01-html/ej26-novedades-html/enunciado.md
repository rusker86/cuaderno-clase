# Ejercicio 26 — Novedades del estándar vivo de HTML

Objetivo: familiarizarse con capacidades modernas **nativas** de HTML (sin JS) que mejoran UX, accesibilidad y rendimiento.

## Lo que debes usar

1. **`<dialog>`** (modal nativo):

   - Crea un diálogo con `id="info"`.
   - Incluye un título (`h2`) y un texto breve.
   - Añade un `<form method="dialog">` con un botón para **cerrar** el diálogo.
   - Muestra un ejemplo con el diálogo **abierto** mediante el atributo `open` (solo para la demo).
   - Añade un botón fuera del diálogo que explique que normalmente se abriría/cerraría con JS, pero aquí **solo demostramos la estructura**.

2. **Atributo `popover`** (Popovers nativos):

   - Crea un contenedor con `id="menu"` y `popover` que contenga enlaces ficticios.
   - Añade dos botones: uno con `popovertarget="menu"` y otro con `popovertarget="menu"` `popovertargetaction="hide"`.
   - Incluye texto alternativo dentro del popover por si no se soporta.

3. **`inert`** (bloquear interacción en un subtree):

   - Crea una sección de contenido marcada con `inert` (no debe ser navegable/focalizable).
   - Añade un comentario explicando que, en aplicaciones reales, se activa cuando hay un modal abierto.

4. **Rendimiento**:

   - Inserta una imagen con `loading="lazy"` y `decoding="async"`.
   - Añade `fetchpriority="high"` en una imagen “principal” (por ejemplo un logo) para priorizar su descarga.
   - Si insertas un `<iframe>`, usa también `loading="lazy"`.

5. **Plus opcional** (elige uno y coméntalo):
   - `autofocus` en un campo del `<dialog>`.
   - `inputmode`/`enterkeyhint` en un `<input>`.
   - `<details><summary>` para contenidos plegables sin JS.

## Requisitos

- **Sin CSS ni JavaScript**. Solo HTML.
- Deja **comentarios `<!-- ... -->`** explicando por qué usas cada atributo/elemento.
- Mantén `lang="es"` y una estructura clara con `header`, `main`, `footer`.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
