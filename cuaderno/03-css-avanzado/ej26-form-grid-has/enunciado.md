# Ejercicio 26 — Layouts responsivos de formularios (CSS Grid + `:has()`)

**Objetivo**
Diseñar formularios **claros y adaptables** con **CSS Grid** (patrones 1–2–3 columnas, auto-fit, full-width) y estados visuales con `:has()`:

- `grid-template-columns` con `minmax()`, `auto-fit`, `subgrid` (opcional).
- Agrupar campos con `.field` y resaltar con `:has(:focus)`, `:has(:invalid)`.
- Campos largos a **ancho completo** con utilidades (`.col-span-2`, `.full`).
- Secciones/steps con encabezado y **resumen** a la derecha (layout con sidebar en ≥900px).

## Requisitos

1. **Shell del formulario**

   - Contenedor `.form` con grid base de **2 columnas fluidas**:  
     `grid-template-columns: repeat(auto-fit, minmax( clamp(14rem, 30vw, 22rem), 1fr ));`
   - `gap` fluido con `clamp()`.

2. **Campos y estados con `:has()`**

   - Cada campo es `.field` (envuelve `label`, `input/select/textarea`, `.hint`).
   - Estilos:
     - `.field:has(:focus)` → halo de foco.
     - `.field:has(:invalid)` → borde de **error** y muestra `.hint--error`.
     - `.field:has(:valid)` → borde **ok**.
   - Usa atributos nativos (`required`, `type="email"`, `minlength`, etc.) y/o `aria-invalid`.

3. **Spans de columnas**

   - Marcar correo y dirección como **ancho completo** en desktop (`.full`).
   - En móvil, todo **1 columna**.

4. **Grupos y fila densa**

   - Grupo “Dirección” con 3 campos (calle, ciudad, CP) y ajuste denso (`grid-auto-flow: dense;`) para evitar huecos.

5. **Barra lateral (resumen)**

   - En ≥900px, layout maestro: formulario + `.summary` (precio/resumen) en dos columnas (sidebar fija ~300px).
   - En móvil, sidebar baja debajo.

6. **(Opcional) Subgrid**

   - Si hay soporte, usar `subgrid` para alinear labels y campos dentro de `.form`.

7. **Accesibilidad**
   - `label` asociado por `for/id`.
   - `:focus-visible` claro en controles.
   - Contraste mínimo 4.5:1.
   - `aria-live="polite"` en mensajes de resumen si cambian (mock).

## Entregable

Trabaja **solo** en `/starter`. Compara con `/solucion` al final.

> Tips
>
> - Usa utilidades `.full`, `.col-span-2`, `.right` para controlar spans.
> - `:has()` simplifica estilos de contenedor según el estado del input hijo.
