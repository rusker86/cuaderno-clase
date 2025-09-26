# Ejercicio 25 — Combinadores de selectores (descendant, child, adjacent, sibling)

**Objetivo**: seleccionar elementos según su **relación estructural** en el DOM usando:

- Descendiente `A B`
- Hijo directo `A > B`
- Hermano adyacente `A + B`
- Hermanos generales `A ~ B`

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea cuatro demos independientes:

### A) Descendiente (`A B`)

- Estructura con un `.card` que contenga varios elementos (`h3`, `p`, `a`).
- Estiliza **solo** los `<a>` que estén **dentro** de `.card` (descendientes en cualquier profundidad).

### B) Hijo directo (`A > B`)

- Dentro de `.list`, crea `ul` con `li` y anida un `ul` interno en uno de los `li`.
- Aplica estilo **solo** a los `li` que sean **hijos directos** de `.list` (no a los anidados).

### C) Hermano adyacente (`A + B`)

- Pon un `<h4>` seguido de varios párrafos.
- Estiliza **solo el primer `<p>`** que va **justo después** del `h4`.

### D) Hermanos generales (`A ~ B`)

- Con el mismo `h4`, aplica un estilo a **todos los `<p>` siguientes** (mismo padre) usando `~`.

3. Escribe **comentarios en CSS** explicando cada combinador y sus efectos.
4. (Opcional) Encadena combinadores: `.card > ul > li + li` para estilizar todos los `li` excepto el primero.
5. No uses `!important`.

## Nota

- Combinadores **no cambian la especificidad** base del selector (suma de los simples).
- Revisa que `+` y `~` solo actúan entre **hermanos** con el mismo padre.

## Entregable

Edita solo `starter/index.html` y `starter/style.css`. La solución va en `solucion/`.
