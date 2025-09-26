# Ejercicio 24 — Formularios en HTML5

Objetivo: crear un formulario accesible y usable usando **etiquetas y tipos modernos** de HTML5, confiando en la **validación nativa** del navegador.

## Requisitos mínimos

1. Crea un formulario con `action="#"` y `method="post"`, que incluya:
   - Agrupaciones con `fieldset` y `legend`:
     - **Datos personales**: nombre (`text`), email (`email`), web (`url`).
     - **Preferencias**: opciones `radio` (exclusivas) y `checkbox` (múltiples).
   - Campos con validación nativa:
     - `email` con `required`.
     - `url` con `required`.
     - `number` con `min`, `max`, `step`.
     - `date` y `time`.
     - `range` (muestra el valor actual con un `output` enlazado por `id`/`for`).
   - Un `select` (con al menos 4 opciones; puedes usar `optgroup`).
   - Un `textarea` para comentarios.
   - Un `file` con `accept="image/*"` (no obligatorio).
   - Un campo `text` con `list` + `datalist` (sugerencias).
2. Accesibilidad y UX:
   - Usa `label` con `for` y `id` en todos los campos interactivos.
   - Usa `autocomplete` apropiado (ej.: `name`, `email`, `url`, `country`, etc.).
   - Añade `placeholder` **sin** sustituir al `label`.
   - Añade un `title` o texto auxiliar cuando uses `pattern`.
3. Controles de envío:
   - Botón **Enviar** (`type="submit"`) y **Reset** (`type="reset"`).
   - Muestra un aviso con texto (no JS) de que se trata de una demo (`action="#"`).
4. No uses CSS ni JS. Solo HTML.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
