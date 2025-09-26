# Ejercicio 28 — Mini-proyecto integrador (HTML)

Objetivo: construir una **página completa** aplicando lo aprendido: estructura semántica, contenidos, listas, tablas, imágenes, multimedia, formulario y accesibilidad básica.

## Requisitos

1. **Estructura y A11y**

   - Doctype y `<html lang="es">`.
   - `<meta charset>`, `<meta name="viewport">`, `<title>` descriptivo.
   - Landmarks: `header`, `nav`, `main`, `footer`.
   - **Enlace de salto** al inicio: “Saltar al contenido” → `#contenido`.
   - Jerarquía de encabezados correcta (`h1` único, luego `h2`/`h3`…).
   - Al menos una **entidad** HTML (p.ej., `&copy;`, `&euro;`, `&ndash;`).

2. **Navegación**

   - Menú principal (`nav`) con 3–4 enlaces internos que apunten a secciones del `main`.

3. **Textos**

   - Párrafos con formateo (`strong`, `em`, `mark`, `abbr title`).
   - Cita breve con `<q>` **o** bloque con `<blockquote cite>`.
   - Lista `ul` y lista `ol` (una con anidada).

4. **Tablas**

   - Una `table` con `caption`, `thead`, `tbody`, `tfoot`.
   - `th` con `scope="col"`/`scope="row"`.
   - Al menos un `rowspan` o `colspan`.

5. **Imágenes**

   - Una imagen **informativa** con `alt` y `width/height`.
   - Una **decorativa** con `alt=""`.
   - Una figura con `figure` + `figcaption`.
   - (Opcional) una imagen con `srcset` y `sizes`, o un `picture` con `source` WebP.

6. **Multimedia**

   - Un `<audio controls>` con dos `<source>` (mp3/ogg) y `preload="metadata"`.
   - Un `<video controls poster>` con dos `<source>` (mp4/webm), `preload="metadata"`, `playsinline` y un `<track>` VTT (ruta ficticia).

7. **Embebido**

   - Un `iframe` con `title` y `loading="lazy"` (p.ej., mapa o documento de ejemplo).

8. **Formulario**

   - `form action="#" method="post"`.
   - `fieldset/legend`, `label/for`, inputs `email`, `url`, `number` (con min/max), `date`, `range` con `output`, `textarea`, `select`, `checkbox` o `radio`.
   - `aria-describedby` para una ayuda.
   - Botones `submit` y `reset`.

9. **Footer**
   - Texto con `&copy;` y el año actual.

## Entregable

Edita **solo** `starter/index.html`. Comprueba en el validador (validator.w3.org) que no haya errores.
