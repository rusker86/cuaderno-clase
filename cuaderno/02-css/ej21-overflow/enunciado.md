# Ejercicio 21 — `overflow` (recorte y scroll)

**Objetivo**: controlar qué ocurre cuando el contenido **sobrepasa** el tamaño de un contenedor.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea una sección con **4 contenedores** (misma anchura/altura fija) que demuestren:
   - **A)** `overflow: visible;` (comportamiento por defecto).
   - **B)** `overflow: hidden;` (recorta el contenido).
   - **C)** `overflow: scroll;` (muestra siempre barras).
   - **D)** `overflow: auto;` (barras solo si hace falta).
3. Añade otra sección para **ejes**:
   - **E)** `overflow-x: auto; overflow-y: hidden;` (solo scroll horizontal).
   - **F)** `overflow-y: auto; overflow-x: hidden;` (solo scroll vertical).
4. (Opcional) **Texto con puntos suspensivos**:
   - Un bloque con una sola línea que recorte y muestre `…` usando `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`.
5. Escribe **comentarios en CSS** explicando:
   - Diferencias entre los valores.
   - Qué hacen `overflow-x` y `overflow-y`.
   - Por qué `text-overflow` necesita `nowrap` y un ancho restringido.

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La solución está en `solucion/`.
