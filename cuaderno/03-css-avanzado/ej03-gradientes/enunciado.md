# Ejercicio 03 — Gradientes (lineal, radial, cónico, repetidos y múltiples capas)

**Objetivo**  
Dominar gradientes en CSS: `linear-gradient`, `radial-gradient`, `conic-gradient`,
versiones `repeating-*`, y combinar **múltiples fondos** (overlay de texturas).

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea al menos **5 demos**:

### A) `linear-gradient`

- Fondo con degradado lineal en un banner. Prueba ángulos (`to right`, `45deg`) y múltiples paradas de color.

### B) `radial-gradient`

- Degradado radial (circle / ellipse). Usa **shape** y **size** (`closest-corner`, `farthest-side`).

### C) `conic-gradient`

- Un medallón/rueda de colores utilizando `conic-gradient(from 0deg at 50% 50%, ...)`.

### D) `repeating-linear/radial`

- Patrón de **rayas** o cuadriculado con `repeating-linear-gradient` (y opcional radial).

### E) **Múltiples capas**

- Combina dos o más gradientes: por ejemplo, un `linear-gradient` semitransparente sobre un patrón `repeating-linear-gradient` para crear una tarjeta con textura.

3. (Opcional) **Texto con gradiente**

- Usa gradiente como `background` y `background-clip:text` + `color: transparent` (ojo a compatibilidad).

4. Comenta en CSS:

- Sintaxis de cada tipo y qué significa el primer argumento (dirección/ángulo, centro, etc.).
- Orden de **capas** (la primera declarada es la **más cercana** al usuario).
- `background-size`/`background-position` por capa (listas separadas por coma).

## Entregable

Edita **solo** `starter/`. La solución está en `/solucion`.
