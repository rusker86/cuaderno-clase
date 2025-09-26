# Ejercicio 22 — Audio en HTML5

Objetivo: insertar audio correctamente con varias fuentes, controles accesibles y buenas prácticas de rendimiento y accesibilidad.

## Requisitos mínimos

1. Crea una página con:

   - Un `h1` y un párrafo introductorio.
   - Un reproductor `<audio>` con:
     - `controls` visible.
     - Al menos **dos fuentes** (`<source>`) en formatos distintos (por ejemplo, MP3 y OGG).
     - `preload="metadata"` (o `none`) y un comentario justificando tu elección.
     - Un elemento `<track>` con `kind="captions"` o `kind="descriptions"` apuntando a un archivo `.vtt` (ficticio), con `srclang` y `label`.
     - Texto alternativo dentro de `<audio>` como _fallback_.

2. Añade un **segundo** `<audio>` corto (efecto/loop), que:

   - Use `loop`.
   - Use `preload="none"`.
   - Tenga `controls`.

3. Accesibilidad:

   - Incluye un subtítulo `h2` “Transcripción” y escribe una breve **transcripción** o resumen del audio principal.

4. Buenas prácticas:
   - No uses `autoplay` salvo comentario que explique por qué suele bloquearse sin interacción del usuario.
   - Si añades `muted` para pruebas, deja un comentario explicando su efecto.

## Pistas

- Los navegadores intentan reproducir `autoplay` solo tras una **interacción del usuario** (o si el audio está `muted`, lo que no suele tener sentido para audio informativo).
- `preload="metadata"` descarga solo lo necesario para mostrar duración; `none` evita descargas hasta reproducir.
- El `<track>` usa el formato **WebVTT** (`.vtt`).

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
