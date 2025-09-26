# Ejercicio 12 — Fuentes en CSS3

**Objetivo**: configurar tipografías en una página usando pilas de fuentes, tamaños relativos, pesos/estilos y carga de fuentes personalizadas.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Define en `body` una **pila de fuentes** con `font-family` (fuente preferida, varias alternativas y la genérica).
3. Crea una sección con **muestras de texto**:
   - `h1` y `h2` con tamaños distintos (usa `rem`) y `line-height` **sin unidad**.
   - Párrafos con `font-size` base y un párrafo más pequeño (`.small`) usando `0.875rem`.
   - Un texto en **cursiva** (`font-style: italic`).
   - Un texto **negrita** (`font-weight: 700`).
   - (Opcional) `font-variant: small-caps`.
4. Usa el **shorthand `font`** al menos una vez (por ejemplo, en `h1`).
5. Carga una fuente personalizada de **dos maneras** (usa la que prefieras en el documento y deja la otra comentada):
   - **A) `@font-face`** con archivos locales ficticios (p. ej., `fonts/Inter-Variable.woff2` o `fonts/Inter-Regular.woff2`).
     - Define `font-display: swap;`.
   - **B) Google Fonts** con `<link>` en `index.html` (p. ej., “Inter” o “Roboto”).
     - Deja el `<link>` **comentado** si no la vas a usar.
6. Añade **comentarios** en `style.css` explicando:
   - Por qué `line-height` sin unidad.
   - Qué es una pila/fallback de fuentes.
   - Diferencia entre `em` y `rem` (breve).
7. No uses JS ni `!important`.

## Pistas

- Pila recomendada sans-serif de sistema:
  `system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, sans-serif`
- `rem` escala respecto al `font-size` del **root** (`html`), por defecto 16px → 1rem = 16px.
- `font: italic 700 2rem/1.2 "Inter", system-ui, sans-serif;` (shorthand: style weight size/line-height family).

## Entregable

Edita `starter/index.html` y `starter/style.css` hasta cumplir los requisitos.
