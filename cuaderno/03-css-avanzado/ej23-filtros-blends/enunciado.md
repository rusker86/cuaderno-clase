# Ejercicio 23 — Filtros, blends y modos de mezcla (UI de galerías y overlays)

**Objetivo**  
Practicar `filter`, `backdrop-filter`, `mix-blend-mode`, `background-blend-mode` y capas con gradientes para construir una mini **galería** con efectos de hover y tarjetas con **overlays legibles**.

## Requisitos

1. **Mini-galería con efectos de hover**

   - Cuadrícula de 6–8 imágenes (`.thumb`).
   - En hover: aplicar **una** de estas variantes (elige 3 diferentes entre las miniaturas):
     - `grayscale()` + `contrast()` sutil.
     - `blur(2px)` solo sobre la imagen, no el contenedor.
     - `brightness(.8)` + `saturate(1.2)`.

2. **Overlay legible**

   - Cada `.thumb` muestra un título en la esquina inferior con un **overlay** degradado.
   - El overlay se hace con un pseudo-elemento o un `linear-gradient` en `background`.
   - No tapes completamente la foto (usa alfa).

3. **Duotono sin SVG**

   - Crea un bloque `.duotone` (una imagen grande) con:
     - Una imagen de fondo + capa de gradiente.
     - Ajusta con `filter` (ej. `grayscale(1) contrast(1.2) brightness(0.9)`).
     - Mezcla con `background-blend-mode: multiply` o `overlay`.

4. **Tarjeta “glass”**

   - Tarjeta `.glass` superpuesta a una foto de fondo.
   - Fondo translúcido con `background: rgba(...,.2)` + `backdrop-filter: blur(8px)` (con prefijo si quieres).
   - Bordes sutiles para legibilidad.

5. **Blends de texto**

   - Un titular con `mix-blend-mode: overlay` o `difference` sobre una imagen para ver la interacción.
   - Mantén una alternativa segura: en `prefers-contrast: more` o si el fondo es claro, forzar color sólido.

6. (Opcional) **Modo de mezcla por elemento**
   - Un bloque `.ink` encima de una imagen usando `mix-blend-mode: multiply` simulando tinta.

## Accesibilidad

- No abuses de `blur`/filtros pesados en áreas grandes (rendimiento).
- El texto superpuesto **debe** superar contraste mínimo (4.5:1 para texto normal).
- Mantén `:focus-visible` claro en elementos interactivos.

## Entregable

Edita **solo** `starter/`. Compara con `/solucion` al terminar.

> Tip: `background` admite **capas** separadas por comas. `background-blend-mode` aplica por **posición** de la capa.
