# Ejercicio 23 — Video en HTML5

Objetivo: insertar vídeo correctamente con varias fuentes, controles accesibles, optimización de carga y subtítulos.

## Requisitos mínimos

1. Crea una página con:

   - Un `h1` y un párrafo introductorio.
   - Un `<video>` principal con:
     - `controls`.
     - `poster="images/poster.jpg"` (imagen de portada).
     - `preload="metadata"` (o `none`) y un comentario justificando tu elección.
     - **Tres fuentes**: `<source>` en MP4 (`video/mp4`), WebM (`video/webm`) y, si quieres, Ogg (`video/ogg`).
     - `playsinline` (para evitar auto-fullscreen en móviles).
     - Un `<track kind="subtitles" ...>` en `.vtt` (fichero ficticio), con `srclang` y `label`.
     - Texto _fallback_ dentro de `<video>` con un enlace de descarga al MP4.

2. Añade un **segundo vídeo corto** (por ejemplo, un loop decorativo):

   - Usa `muted` + `loop`.
   - Explica en un comentario que `autoplay` suele requerir `muted` para funcionar sin interacción.
   - Usa `preload="none"`.

3. Accesibilidad y UX:

   - Incluye **subtítulos** (VTT) en al menos un idioma.
   - Añade `title` o un encabezado justo antes del vídeo para describir su contenido.

4. Buenas prácticas (comentarios en el HTML):
   - Por qué `preload="metadata"`/`none`.
   - Cuándo (y por qué) **no** abusar de `autoplay`.
   - Qué hace `playsinline`.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
