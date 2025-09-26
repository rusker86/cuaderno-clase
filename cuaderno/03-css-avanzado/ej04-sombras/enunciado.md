# Ejercicio 04 — Sombras en CSS

**Objetivo**  
Dominar `box-shadow` (múltiples capas, `inset`, spread), `text-shadow` sutil, y `filter: drop-shadow()` para PNG/SVG con transparencias.

## Requisitos

1. Enlaza `style.css` desde `index.html`.
2. Crea **5 demos**:

### A) Sombra básica y múltiple (`box-shadow`)

- Tarjeta `.card` con **dos** sombras superpuestas (ambient + direccional).
- Al pasar el ratón, aumenta la elevación (transición suave).

### B) Sombra interior (`inset`)

- Caja con `inset` para simular relieve/“hundido”.

### C) Spread y control de dureza

- Muestra efecto del **spread** (quinto valor de `box-shadow`) con dos cajas comparativas.

### D) `text-shadow` sutil

- Título con `text-shadow` leve (accesible, no “glow” extremo).

### E) `filter: drop-shadow()`

- Imagen PNG/SVG con transparencia y sombra que **siga el contorno** (no el rectángulo).
- Compara con `box-shadow` para ver la diferencia.

3. Añade comentarios sobre:

- Orden de valores: `offset-x`, `offset-y`, `blur`, `spread`, `color`, `inset`.
- Varias sombras separadas por comas (primera declarada se dibuja arriba).
- `drop-shadow()` aplica tras el **alpha** del elemento (contorno real).
- Rendimiento: sombras muy grandes/blurs altos pueden costar; úsalas con moderación.

4. (Opcional)

- Escala de elevación (1–5) con variables de sombra reutilizables.
- Hover/focus con sombra + `outline` visible (no elimines foco).

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La solución está en `/solucion`.
