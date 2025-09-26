# Ejercicio 25 — Accesibilidad mínima (A11y) en HTML

Objetivo: aplicar buenas prácticas **básicas** de accesibilidad en un documento HTML sin usar CSS ni JavaScript.

## Requisitos mínimos

1. Estructura y landmarks:

   - Usa un `h1` único y jerarquía correcta (`h2`/`h3`…).
   - Usa landmarks semánticos: `header`, `nav`, `main`, `footer`.
   - Añade un **enlace de salto** al principio del documento: “Saltar al contenido principal” que apunte a `#contenido`.

2. Imágenes:

   - Una imagen **informativa** con `alt` **descriptivo**.
   - Una imagen **decorativa** con `alt=""`.

3. Formularios:

   - Campo **texto** con `label for`.
   - Campo con ayuda asociada mediante `aria-describedby` (por ejemplo, un texto con `id="ayuda-x"`).
   - Un control con `aria-label` **solo** si no es posible poner `label` visible (justifica en un comentario).

4. Navegación con teclado y foco:

   - Asegura orden lógico del DOM.
   - Añade **un único** `tabindex="0"` a un bloque explicativo para hacerlo alcanzable (no uses valores positivos).
   - Incluye al menos **un enlace** y un **botón** (de formulario o `type="button"`) alcanzables por teclado.

5. Otros:
   - Añade `lang="es"` en `<html>`.
   - Evita usar solo mayúsculas seguidas en textos largos (dificultan lectura).
   - Deja comentarios `<!-- -->` explicando por qué se usan los atributos A11y.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.

> Nota: No uses `tabindex` positivo. Prefiere siempre `label/for` frente a `aria-label`. Usa `aria-*` para complementar, no para sustituir semántica.
