# Ejercicio 06 — Márgenes en CSS3

**Objetivo**: dominar `margin` (por lados y shorthand), entender el **colapso de márgenes verticales** y aplicar el **centrado horizontal** con `margin: 0 auto`.

## Requisitos

1. Enlaza `style.css` desde `index.html`.
2. Crea en `index.html` estas zonas:
   - **A)** “Básicos de margin”: tres cajas con márgenes distintos usando:
     - `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.
     - `margin` (shorthand con 1, 2 y 4 valores).
   - **B)** “Centrado con auto”: una caja con ancho fijo centrada con `margin: 0 auto`.
   - **C)** “Colapso de márgenes (hermanos)”: dos cajas apiladas, cada una con `margin-top`/`margin-bottom`. Observa cómo **los márgenes verticales adyacentes colapsan** (se combinan) en lugar de sumarse.
   - **D)** “Colapso con el contenedor”: un contenedor **sin** `padding/border` con un hijo que tiene `margin-top`. El margen del hijo **colapsa** hacia fuera del contenedor. Repite con otro contenedor que **evite el colapso** añadiendo `padding-top` o `border-top`.
3. Añade **comentarios** en `style.css` explicando:
   - Por qué `margin: 0 auto` centra horizontalmente.
   - Qué es el **colapso** y cómo evitarlo.
4. (Opcional) **Márgenes negativos**: muestra una caja con `margin-top: -20px` y comenta cuándo puede ser útil/peligroso.
5. No uses `!important`.

## Pistas

- Shorthand:
  - `margin: 20px;` → todos los lados.
  - `margin: 10px 20px;` → vertical | horizontal.
  - `margin: 5px 10px 15px 20px;` → top | right | bottom | left.
- El **colapso** afecta a **márgenes verticales** entre cajas de **bloque** en el flujo normal.
- Se evita el colapso si el contenedor tiene **padding**, **border** o **bloque de formateo** (p. ej., `overflow: auto`).

## Entregable

Edita `starter/index.html` y `starter/style.css` hasta cumplir los requisitos.
