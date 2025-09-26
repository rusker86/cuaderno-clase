# Ejercicio 13 — Paginación (solo CSS)

**Objetivo**  
Diseñar un componente de **paginación accesible** y adaptable, con estados (activo, hover, focus, disabled), truncado con «…» y variantes compacta/normal.

## Requisitos

1. Marca semántica:

- Usa `<nav aria-label="Paginación">` y una lista `<ul>`.
- Elemento activo con `aria-current="page"`.

2. Elementos mínimos:

- Botón **Anterior** y **Siguiente**.
- Páginas numeradas (al menos 1–10) con **truncado** (ej. `1 … 8 9 10`).
- Estado `disabled` en prev/next cuando aplique.

3. Estados y A11y:

- `:hover`, `:focus-visible`, `:active`, `[aria-current="page"]`.
- Foco **visible** y detectable por teclado.
- Texto accesible para iconos (usa `aria-hidden="true"` en decorativos).

4. Variantes (2):

- `.pagination` (normal).
- `.pagination--compact` (espaciado/tipografía reducida a partir de 640px ↓).

5. Extras (opcionales):

- Soporte RTL con `:dir(rtl)`.
- Tamaños S/M/L con variables.
- Mostrar recuento: “Mostrando 41–60 de 128”.

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La referencia está en `/solucion`.
