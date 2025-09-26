# Ejercicio 15 — Listas en CSS3

**Objetivo**: aprender a personalizar listas en CSS (`list-style-type`, `list-style-position`, `list-style-image`, shorthand `list-style`).

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea en el HTML:
   - Una **lista no ordenada** con al menos 3 elementos.
   - Una **lista ordenada** con al menos 3 elementos.
   - Una lista con **sublistas anidadas** (ul dentro de ul).
3. En CSS aplica estilos distintos:
   - Cambia el `list-style-type` en cada lista (ej. `disc`, `square`, `decimal`, `upper-roman`).
   - Usa `list-style-position: inside` en un caso y `outside` en otro.
   - Aplica `list-style-image` con un icono pequeño (puede ser un emoji en `content` si no tienes imagen).
   - Usa el **shorthand** `list-style` en al menos un ejemplo.
4. (Opcional) Crea un **menú horizontal** a partir de un `ul`, eliminando los bullets (`list-style: none;`) y usando `display: inline-block` o `flex`.

## Pistas

- Por defecto, los navegadores aplican `list-style-type: disc` en `<ul>` y `decimal` en `<ol>`.
- `list-style` shorthand = `list-style: type position image;`.
- Para resetear un menú de navegación: `ul { list-style: none; margin: 0; padding: 0; }`.

## Entregable

Edita los archivos en `starter/`. No rellenes la carpeta `solucion/` (eso lo hace el profesor).
