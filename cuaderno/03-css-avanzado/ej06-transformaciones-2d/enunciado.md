# Ejercicio 06 — Transformaciones 2D

**Objetivo**  
Practicar `transform` en 2D: `translate`, `scale`, `rotate`, `skew`, el orden de transformaciones y `transform-origin`.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea **5 demos**:

### A) Translate

- Mueve una caja `.t` 20px a la derecha y 10px hacia abajo con `translate`.
- Compara con `margin` (nota: `transform` no empuja a otros elementos).

### B) Scale (con origen)

- Escala `.s` a `1.2` y cambia el `transform-origin` a la esquina superior izquierda.

### C) Rotate (grados)

- Rota `.r` 15° y añade una **sombra** para visualizar el giro.

### D) Skew (inclinación)

- Inclina `.k` en X y/o Y. Añade un borde para ver la deformación.
- Nota: skew deforma el contenido (texto, etc).

### E) Composición y orden

- Crea `.combo` y aplica **dos transformaciones** en distinto orden:
  - Variante 1: `translate` luego `rotate`.
  - Variante 2: `rotate` luego `translate`.
- Observa que el orden **importa**.

3. (Opcional) “Tarjeta” que al pasar el ratón combine `translateY(-2px)` + `scale(1.02)` (transición suave).
4. Comenta en CSS:
   - Sintaxis: `transform: translate(...) scale(...) rotate(...) skew(...);`
   - `transform-origin` cambia el pivote.
   - El orden de las funciones altera el resultado.
   - `transform` no afecta el flujo del documento (no relayout).

> Accesibilidad: son transformaciones **estáticas**; si añades `transition`, respeta `prefers-reduced-motion`.

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La solución va en `/solucion`.
