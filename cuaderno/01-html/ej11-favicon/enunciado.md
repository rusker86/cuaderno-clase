# Ejercicio 11 — Favicons y recursos externos

Objetivo: aprender a añadir un **favicon** y otros recursos externos a una página HTML.

## Requisitos mínimos

1. Crea un documento HTML que incluya en el `<head>`:
   - Un `<link rel="icon">` con un archivo `favicon.ico`.
   - Un `<link rel="icon" type="image/png">` con un archivo `favicon.png` (32x32).
   - Un `<link rel="apple-touch-icon">` para dispositivos iOS (ej. `apple-touch-icon.png`).
   - Un `<link rel="stylesheet">` que enlace con un archivo CSS externo ficticio (`styles.css`).
   - Un `<link rel="alternate">` que apunte a un feed RSS ficticio (`feed.xml`).
2. En el `<body>`:
   - Un `h1` con el texto: "Página con Favicon".
   - Un párrafo breve explicando qué es un favicon.
3. Usa comentarios `<!-- -->` para explicar cada enlace en el `<head>`.

## Pistas

- Los favicons deben estar en la raíz del proyecto o en una carpeta de imágenes.
- Se pueden usar varios formatos para compatibilidad: `.ico`, `.png`, `.svg`.
- `apple-touch-icon` mejora la visualización en dispositivos móviles Apple.
- `alternate` con `type="application/rss+xml"` sirve para ofrecer un feed RSS.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
