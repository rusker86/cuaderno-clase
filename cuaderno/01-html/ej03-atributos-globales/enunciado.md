# Ejercicio 03 — Etiquetas y atributos globales en HTML5

Objetivo: practicar el uso correcto de **etiquetas comunes** y **atributos globales** de HTML5 para mejorar semántica, accesibilidad y control del DOM.

## Requisitos mínimos

1. Crea una página con:

   - Un `header` con el título del sitio.
   - Un `main` con dos secciones (`section`), cada una con un `article`.
   - Un `footer` con derechos y año.

2. Usa **atributos globales** en varios elementos:

   - `id` y `class` para identificar y agrupar.
   - `title` para proporcionar información extra en al menos 2 elementos.
   - `lang` (por ejemplo, un bloque de texto en `lang="en"`).
   - `dir` en un bloque corto (por ejemplo, `dir="rtl"`).
   - `hidden` en un elemento que **no** deba mostrarse inicialmente (deja un comentario explicando para qué lo usarías).
   - `tabindex` para definir un orden de tabulación lógico en **tres** elementos interactivos (enlaces o botones).
   - `contenteditable` en un pequeño párrafo editable por el usuario.
   - `data-*` (al menos 2 atributos `data-...`) para almacenar metadatos en un `article`.

3. Añade **al menos 3 etiquetas de texto**: `strong`, `em`, `small`, `abbr` (con `title`), `mark`, `time` (con `datetime`), etc.

4. Accesibilidad mínima:
   - Asegúrate de que el documento tiene `lang="es"` en `<html>`.
   - Usa `alt` en cualquier imagen (si añades alguna).
   - Usa encabezados en orden lógico.

## Pistas

- Los **atributos globales** funcionan en casi todas las etiquetas.
- `tabindex="0"` incluye en el orden natural; números positivos **deben usarse con cuidado** (para este ejercicio, puedes usarlos, pero recuerda que no es recomendable en proyectos reales).
- Los atributos `data-*` son útiles para JS más adelante.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
