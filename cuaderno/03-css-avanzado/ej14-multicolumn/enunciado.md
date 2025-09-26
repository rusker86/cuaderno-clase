# Ejercicio 14 — Múltiples columnas variables (CSS Multi-Column)

**Objetivo**
Practicar el módulo Multi-column: `column-count`, `column-width`, `column-gap`, `column-rule`,
`column-span`, control de cortes (`break-inside`) y comportamiento responsive.

## Requisitos

1. **Artículo multicolumna**

   - Un bloque `.article` con 2–3 columnas según ancho.
   - Usa `column-width` **o** `column-count` (y comenta pros/contras).
   - Ajusta `column-gap` y `column-rule` (línea divisoria).

2. **Títulos que abarcan columnas**

   - Dentro del artículo, un `h2` que **cruce todas las columnas** con `column-span: all`.

3. **Evitar cortes feos**

   - Para cards/listas dentro de `.article`, prueba `break-inside: avoid` (y comenta que no siempre se respeta).

4. **Galería tipo “masonry” simple**

   - Un contenedor `.masonry` que fluya elementos de altura desigual en varias columnas (sin Grid).
   - Controla el gap y evita cortes: `break-inside: avoid`.

5. **Responsive**

   - Media queries que cambian de 1 → 2 → 3 columnas según el ancho.

6. (Opcional) **column-fill**
   - Muestra la diferencia entre `balance` y `auto` en un bloque `.fill-demo` con altura fija.

> Nota: Multi-column **refluye en columnas verticales** manteniendo el **orden fuente**.
> No es igual a Grid. Buena para texto largo o “masonry” básico; para layouts complejos usa Grid/Flex.

## Entregable

Edita **solo** `starter/`. Revisa `/solucion` cuando termines.
