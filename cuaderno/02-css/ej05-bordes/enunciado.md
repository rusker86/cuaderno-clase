# Ejercicio 05 — Bordes en CSS3

**Objetivo**: dominar las propiedades de **borde** y sus variantes: estilos, grosores, colores, lados y radios (esquinas redondeadas).

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea **6 bloques** (`div` con clases `.box-a` … `.box-f`) que demuestren:
   - **A)** `border` básico con shorthand (`width style color`).
   - **B)** Bordes por **lado** (`border-top`, `border-right`, etc.) con estilos distintos.
   - **C)** `border-radius` con esquinas suaves (p.ej. `8px`).
   - **D)** **Píldora** (pill) con `border-radius: 9999px`.
   - **E)** **Círculo perfecto** usando `border-radius: 50%` (asegura ancho=alto).
   - **F)** Varios **estilos de borde**: `dashed`, `dotted`, `double`.
3. Usa al menos **dos shorthands**: `border: …` y `border-radius: …`.
4. Añade **comentarios** en `style.css` explicando decisiones (por qué un lado, por qué 50%, etc.).
5. (Opcional) Extra `.box-g`: `border-image` con un patrón o gradiente.

## Pistas

- Shorthand: `border: <width> <style> <color>;`
- Orden de radios (cuando usas 4 valores): `top-left top-right bottom-right bottom-left`.
- Para **círculos**, el elemento debe ser **cuadrado** (`width` = `height`) y `border-radius: 50%`.
- `double` solo se aprecia con un `border-width` razonable (≥ 4px).
- `border-image` requiere `border: <width> solid transparent` + `border-image-source` y `border-image-slice`.

## Entregable

Edita `starter/index.html` y `starter/style.css` hasta cumplir los requisitos.
