# Ejercicio 04 — Backgrounds en CSS3

**Objetivo**: dominar las propiedades de **fondos** en CSS: color de fondo, imagen, repetición, posición, tamaño, fijación y el shorthand `background`.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea una página con una sección `<section>` por ejemplo (mínimo 5), cada una demostrando:
   - **A)** `background-color` sólido.
   - **B)** `background-image` con `background-repeat: repeat`.
   - **C)** Imagen **sin repetir** colocada en una esquina con `background-position`.
   - **D)** Imagen de fondo que **cubra** el contenedor (`background-size: cover`) y otra que **contenga** (`contain`) — puedes hacerlo en una misma sección u otra adicional.
   - **E)** Fondo **fijo** con `background-attachment: fixed` (efecto “parallax” simple).
3. Usa al menos **una** declaración con el **shorthand** `background`.
4. (Opcional) Una sección con **múltiples fondos** (dos `background-image` separados por comas).
5. Añade **comentarios en CSS** explicando qué hace cada propiedad.
6. Usa imágenes locales (p. ej. `images/patron.png`, `images/foto-800.jpg`, `images/icono.png`) o sustitúyelas por rutas que vayas a tener.

## Pistas

- Orden típico del **shorthand** `background`:
  `background: <color> <image> <position>/<size> <repeat> <attachment>;`
- `cover` rellena todo el contenedor recortando si hace falta; `contain` garantiza que la imagen **entera** sea visible.
- `fixed` fija el fondo respecto a la ventana (puede no funcionar en algunos móviles).

## Entregable

Edita `starter/index.html` y `starter/style.css` hasta cumplir los requisitos.
