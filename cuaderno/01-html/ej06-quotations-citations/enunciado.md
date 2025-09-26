# Ejercicio 06 — Quotation & Citation en HTML5

Objetivo: aprender a marcar **citas textuales, referencias y abreviaturas** con las etiquetas adecuadas de HTML5.

## Requisitos mínimos

1. Crea un documento que represente un pequeño artículo con:

   - Un título principal (`h1`).
   - Un párrafo introductorio con una cita breve en línea usando `<q>`.
   - Un bloque de cita larga usando `<blockquote>` que incluya un atributo `cite` con la URL de la fuente.
   - Dentro del bloque de cita, indica el autor usando `<cite>`.
   - Una abreviatura usando `<abbr>` con su significado en `title`.
   - Una sección de contacto (`address`) con:
     - Nombre del autor.
     - Email en un enlace (`mailto:`).
     - Ciudad o ubicación.

2. Añade al menos una combinación de etiquetas en el mismo párrafo.  
   Ejemplo: un `<abbr>` dentro de una frase junto con un `<q>`.

3. Usa comentarios `<!-- -->` para indicar a qué corresponde cada parte del ejercicio.

## Pistas

- `<q>` es para citas cortas en línea.
- `<blockquote>` es para citas largas o de varios párrafos.
- El atributo `cite` en `<blockquote>` indica la fuente de la cita (no siempre visible, pero semánticamente importante).
- `<cite>` sirve para marcar el nombre del autor o la referencia de una obra.
- `<abbr>` ayuda a la accesibilidad mostrando el significado al pasar el ratón.
- `<address>` es especial: se usa solo para datos de contacto del autor o responsable.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
