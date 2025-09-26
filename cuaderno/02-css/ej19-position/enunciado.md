# Ejercicio 19 — Propiedad `position` (static, relative, absolute, fixed, sticky)

**Objetivo**: comprender cómo posicionar elementos con `position` y usar desplazamientos (`top`, `right`, `bottom`, `left`).

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea las siguientes demos (una sección por tipo):
   - **A) `static` (por defecto):** caja normal en el flujo. Comprueba que `top/left` no tienen efecto.
   - **B) `relative`:** mueve una caja respecto de su **posición original** (ej.: `top: -10px; left: 10px;`). El hueco original se mantiene.
   - **C) `absolute`:** coloca una caja **absoluta** dentro de un contenedor que tenga `position: relative;`. Usa `top/right/bottom/left` para ubicarla (esquina o centrado simple).
   - **D) `fixed`:** crea una **caja fija** en una esquina de la ventana (por ejemplo, abajo-derecha). Debe permanecer visible al hacer scroll.
   - **E) `sticky`:** encabezado de sección con `position: sticky; top: 0;` que se “pegue” al llegar al borde superior del viewport.
3. Añade **comentarios** en CSS explicando:
   - Qué es el **containing block** (bloque contenedor) de un `absolute`.
   - Diferencia `relative` vs `absolute` vs `fixed` vs `sticky`.
   - Por qué `static` ignora offsets.
4. Evita usar `z-index` aquí (lo verás en el siguiente ejercicio).

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La carpeta `solucion/` trae una propuesta resuelta.
