# Ejercicio 02 — Bordes con imágenes (`border-image`)

**Objetivo**  
Aprender a usar `border-image` con diferentes **fuentes de imagen** (gradiente CSS y SVG embebido), practicar `border-image-slice`, `border-image-width`, `border-image-outset` y `border-image-repeat` (`stretch | repeat | round`), y entender `fill`.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea **3 demos**:

### A) Marco con gradiente (sin assets externos)

- Un bloque `.frame-grad` con un borde generado a partir de un **gradiente** como `border-image-source`.
- Ajusta `slice` y `width` para que el marco sea visible.
- Prueba `border-image-repeat: round` vs `stretch`.

### B) Botón con patrón SVG embebido

- Un `<a class="btn-svg">` cuyo borde provenga de un **SVG en data URI** (no hace falta archivo).
- Usa `border-image-slice` y `-repeat` para mantener el patrón.
- Mantén un **fallback** con `border: 2px solid` por si `border-image` no aplica.

### C) Tarjeta con `fill` y `outset`

- Una `.card-fill` que use `border-image` y `border-image-slice: … fill` para **pintar el interior**.
- Añade `border-image-outset` para que el borde sobresalga un poco del contenido.

3. Comenta en CSS:
   - Qué hace `slice` y cómo interactúa con `width`.
   - Diferencia `repeat`, `round` y `stretch`.
   - Qué implica `fill`.
   - Recomendación de **fallback** (`border` normal) por robustez.

> Tip: `border-image-source` acepta `url(...)`, gradientes (`linear-gradient(...)`, `conic-gradient(...)`), e incluso SVG en data URI.

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. Revisa la propuesta en `/solucion` cuando termines.
