# Ejercicio 20 — Layouts fluidos con `minmax()`, `auto-fit`/`auto-fill` y `subgrid` (opcional)

**Objetivo**
Dominar patrones de **CSS Grid** para rejillas fluidas:

- `repeat(auto-fit|auto-fill, minmax())`
- `clamp()` para anchos máximos mínimos
- `subgrid` en filas/columnas (si tu navegador lo soporta) con _fall-back_ razonable.

## Requisitos

1. **Galería fluida (cards)**

   - Usa: `grid-template-columns: repeat(auto-fit, minmax( clamp(14rem, 40vw, 20rem), 1fr ))`
   - Mantén `gap` fluido con `clamp(.75rem, 2vw, 1.25rem)`.
   - Demuestra diferencia `auto-fit` vs `auto-fill` (dos secciones, mismo contenido).

2. **Layout maestro con sidebar**

   - Crea `.layout` con **sidebar** fija (~280px) y área de contenido elástico usando `minmax(0, 1fr)`.
   - En móvil, colapsa a 1 columna con `grid-template-columns: 1fr`.

3. **Lista de artículos con `subgrid` (opcional)**

   - Un contenedor `.list` define filas (o columnas) y cada ítem `.item` usa `display:grid` + `grid-template-columns: subgrid` **o** `grid-template-rows: subgrid`.
   - _Fallback_: si no hay soporte, declara una segunda regla para `grid-template-*` normal.

4. **Ajuste de altura**

   - En la galería, fuerza alturas parecidas con `grid-auto-rows: 1fr` **o** un `aspect-ratio` en las tarjetas.

5. **Accesibilidad**
   - Mantén foco visible en elementos interactivos.
   - Evita columnas con textos demasiado estrechos (< 40ch) en contenido largo.

## Entregable

Rellena **solo `starter/`**. Usa `/solucion` para comparar.

> Tip: `auto-fit` colapsa pistas vacías (mejor para rejillas responsivas), `auto-fill` **reserva** pistas aunque queden vacías.
