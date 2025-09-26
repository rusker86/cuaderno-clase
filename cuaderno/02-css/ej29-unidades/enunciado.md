# Ejercicio 29 — Unidades de medida

**Objetivo**: comprender y comparar unidades absolutas y relativas, y unidades de viewport.

## Alcance

- Absolutas: `px`
- Relativas a fuente: `em`, `rem`
- Relativas al contenedor (modernas): `lh`, `rlh` (opcional)
- Viewport: `vw`, `vh`, `vmin`, `vmax`, `svh`, `lvh`, `dvh` (observa diferencias en móviles)
- Espaciales: `%` (relativo al contenedor)

## Requisitos

1. Enlaza `style.css`.
2. Crea secciones con tarjetas `.box` que comparen:
   - **A)** `px` vs `rem` (cambia `html{font-size}` para ver efecto).
   - **B)** `em` vs `rem` (titular padre con font-size distinto y un hijo que use `em`).
   - **C)** `%` para anchuras relativas dentro de un contenedor.
   - **D)** `vw/vh` para bloques que ocupen parte del viewport.
   - **E)** (Opcional) `vmin/vmax` y nuevas `svh/lvh/dvh` con notas.
   - **F)** (Opcional) `lh` como unidad tipográfica relativa al `line-height`.
3. Añade **comentarios** explicando:
   - `em` depende del **padre**, `rem` del **root**.
   - `vw/vh` dependen del viewport; en móviles, `svh/lvh/dvh` gestionan la UI del navegador.
   - `%` toma como referencia el **contenedor** (para width/height hay matices).
4. No uses `!important`.

## Entregable

Edita `starter/`. La solución va en `solucion/`.
