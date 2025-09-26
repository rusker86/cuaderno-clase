# Ejercicio 09 — Box Model (modelo de caja) en CSS3

**Objetivo**: entender cómo se calcula el tamaño real de una caja en CSS (contenido + `padding` + `border` + `margin`) y practicar `box-sizing`.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea una **rejilla** con al menos 4 cajas demostrativas:

   - **A)** `content-box` (comportamiento por defecto): fija `width: 200px;` y añade `padding` y `border`. Observa que el **tamaño total crece**.
   - **B)** `border-box`: fija `width: 200px;` con los mismos `padding` y `border`, pero el **total se mantiene** en 200px.
   - **C)** Añade `margin` y comprueba que **no forma parte** del tamaño de la caja (es espacio externo).
   - **D)** Comparativa lado a lado: dos cajas con el mismo `width` y estilos, una `content-box` y otra `border-box`, para ver la diferencia visual.

3. Añade **comentarios en CSS** explicando:

   - Fórmula del tamaño total en `content-box`: `total = width + padding izquierdo + padding derecho + border izq + border dcho`.
   - En `border-box` la `width` ya **incluye** padding y border.
   - `margin` es **externo** a la caja.

4. (Opcional)
   - Aplica `* { box-sizing: border-box; }` al principio y comenta por qué se usa a nivel de proyecto.
   - Usa `outline` en un ejemplo para **ver el contorno** sin afectar al tamaño total.

## Entregable

Edita `starter/index.html` y `starter/style.css` hasta cumplir los requisitos.
