# Ejercicio 23 — `display: inline-block`

**Objetivo**: usar `inline-block` para crear cajas que respeten **width/height/padding/border** sin romper el flujo en línea, entender el **espacio en blanco** entre elementos y alinear con `vertical-align`.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea secciones para estas demos:
   - **A) Comparativa**: tres elementos (p.ej. `.a`, `.b`, `.c`) donde muestres diferencias entre `display: inline`, `block` e `inline-block`.
   - **B) Tarjetas en línea**: 3–4 `.card` con `inline-block` que se dispongan en fila y hagan wrap si no caben.
   - **C) Gap entre inline-block**: demuestra el **espacio** que aparece entre `.card` por el **whitespace** del HTML y aplica **una** técnica para eliminarlo (elige: `font-size:0` en el contenedor, o comentarios `<!-- -->`, o cerrar y abrir etiquetas sin salto).
   - **D) `vertical-align`**: tres cajas con alturas distintas alineadas con `top`, `middle` y `bottom`.
3. Añade **comentarios** en CSS explicando:
   - Por qué `inline` **ignora** `width/height`.
   - Por qué `inline-block` sí respeta dimensiones y permanece en línea.
   - El origen del **gap** entre elementos `inline-block` y la técnica usada para quitarlo.
   - Cómo funciona `vertical-align` en cajas en línea/inline-block.
4. (Opcional) Micro–componente: “píldoras” (`.pill`) con icono + texto alineados verticalmente con `inline-block`.

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La solución completa está en `solucion/`.
