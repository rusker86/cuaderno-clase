# Ejercicio 19 — Entidades en HTML5 (repaso ampliado)

Objetivo: dominar el uso de **entidades HTML** con nombre (`&copy;`) y numéricas (`&#169;`), y conocer las más prácticas en contenido real.

## Requisitos mínimos

1. Crea un documento con `h1` y una breve introducción sobre entidades **con nombre** y **numéricas**.
2. Añade una tabla (`table`) con **al menos 5 filas** y estas columnas:
   - **Categoría** (Puntuación, Monedas, Flechas, Matemáticos, Espacios/Guiones, Miscelánea…)
   - **Ejemplo renderizado** (lo que se ve)
   - **Entidad con nombre**
   - **Entidad numérica**
   - **Uso/comentario** (breve)
3. Incluye al menos estos casos en la tabla:
   - Espacio no separable `&nbsp;` y **guiones tipográficos** `&ndash;` (–), `&mdash;` (—).
   - Elipsis `&hellip;`
   - Monedas: `&euro;`, `&#36;` (dólar).
   - Flecha derecha `&rarr;`
   - Símbolos matemáticos: `&times;`, `&plusmn;`, `&le;`, `&ge;`
   - Marcas y derechos: `&copy;`, `&reg;`, `&trade;`
4. Añade un párrafo mostrando **diferencia visual** entre guion normal (`-`), `&ndash;` y `&mdash;`.
5. Añade un ejemplo donde un número y su unidad **no se rompan en línea** usando `&nbsp;`.  
   Ej.: `100&nbsp;kg`
6. Comentarios `<!-- -->` explicando cuándo es obligatorio o recomendable usar entidades.

## Pistas

- Usa entidades cuando el carácter:
  - Se confunde con sintaxis HTML (`<`, `>`, `&`, comillas en atributos).
  - No está en tu teclado o quieres **tipografía correcta** (guiones, elipsis).
  - Debe **evitar saltos de línea** (espacio duro `&nbsp;`).
- Conjunto mínimo profesional: `&nbsp;`, `&ndash;`, `&mdash;`, `&hellip;`, `&copy;`, `&reg;`, `&trade;`, `&euro;`, `&#36;`.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
