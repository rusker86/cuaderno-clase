# Ejercicio 17 — Propiedad `display` (block, inline, inline-block, none)

**Objetivo**: comprender cómo `display` cambia el comportamiento de los elementos en el flujo: caja de bloque, en línea, en línea-bloque y “no mostrar”.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea en el HTML las siguientes áreas:
   - **A) Bloques vs en línea**: tres elementos (por ejemplo, `<div>`, `<span>`, `<a>`) para comparar `display: block` y `display: inline`.
   - **B) `inline-block`**: una hilera de “tarjetas” que:
     - respeten **ancho/alto**,
     - se alineen en **línea**,
     - acepten **padding/border** sin romper la línea.
   - **C) `display: none`**: un elemento presente en el DOM que **no** ocupe espacio (explica con comentario).
   - **D) (Opcional)** diferencia con `visibility: hidden` (ocupa espacio pero es invisible).
3. Estilos:
   - Aplica colores de fondo y bordes para **visualizar** las cajas.
   - Añade comentarios en CSS explicando:
     - Cuándo `inline` **ignora** `width/height`,
     - Por qué `inline-block` permite tamaño y mantiene el flujo en línea,
     - Diferencia entre `display: none` y `visibility: hidden`.
4. No uses `flex` ni `grid` (los veremos más adelante).

## Entregable

Edita solo `starter/index.html` y `starter/style.css`. La solución está en `solucion/`.
