# Ejercicio 26 — Pseudoclases en CSS

**Objetivo**: aplicar pseudoclases para estados interactivos y para seleccionar elementos según su posición/condición en el DOM.

## Requisitos

1. Enlaza `style.css` en `index.html`.

2. **Estados interactivos**

   - Crea un bloque con enlaces y botones:
     - Estilos para `:hover`, `:focus` (o `:focus-visible`) y `:active`.
     - NO elimines el foco sin alternativa.
   - Crea un mini-formulario:
     - Un `<input type="text">` normal, otro con `disabled`.
     - Un `<input type="checkbox">` con estilos para `:checked`.
     - (Opcional) `:required` vs `:optional`.

3. **Pseudoclases estructurales**

   - Lista con 6 ítems:
     - Aplica estilos a `:first-child`, `:last-child`, y una regla con `:nth-child(odd/even)` o un patrón (ej. `3n`).
   - Una sección con elementos mixtos donde demuestres:
     - `:nth-of-type()` (ej. colorear solo los `p` impares).
     - `:not()` para excluir algún elemento de un estilo común.
   - Un elemento vacío para `:empty`.

4. (Opcional)

   - Ancla con `id` y navegación interna para probar `:target`.

5. Documenta en **comentarios**:
   - Diferencias entre `:nth-child()` y `:nth-of-type()`.
   - Buenas prácticas de foco (`:focus-visible`).
   - Qué coincide con `:empty`.

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La solución completa está en `solucion/`.
