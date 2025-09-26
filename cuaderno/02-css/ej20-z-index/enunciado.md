# Ejercicio 20 — `z-index` y contexto de apilamiento

**Objetivo**: entender cómo funciona `z-index`, cuándo surgen **contextos de apilamiento** y por qué un elemento “no sube” aunque le pongas `z-index: 9999`.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea **3 demos**:

   **A) Superposición básica**

   - Tres cajas solapadas (.a, .b, .c).
   - Haz que cambien el orden visual con `z-index` (p. ej., C sobre B sobre A).
   - Asegúrate de que las cajas sean **posicionadas** (`relative/absolute/fixed`) o hijos de `flex/grid` (nota didáctica).

   **B) “No sube” por stacking context**

   - Un contenedor padre `.ctx` que cree **nuevo contexto de apilamiento** (p. ej., `transform: translateZ(0)` o `opacity: 0.999`).
   - Dentro de `.ctx`, un hijo `.inside` con `z-index: 9999` intentando pasar por encima de una caja `.outside` que está **fuera** de `.ctx`.
   - Observa que `.inside` **no** puede superponerse a `.outside` si el padre lo “encierra” en su contexto.

   **C) Overlay modal**

   - Un “falso” modal `.overlay` a pantalla completa con fondo semitransparente y una tarjeta centrada.
   - Debe quedar por encima del contenido base usando `position: fixed` y un `z-index` alto.

3. Añade **comentarios en CSS** que expliquen:

   - `z-index` ordena elementos **dentro del mismo contexto de apilamiento**.
   - Qué crea un nuevo contexto (ejemplos: `position` + `z-index` distinto de `auto`, `opacity < 1`, `transform`, `filter`, `isolation: isolate`, `will-change`, `mix-blend-mode`, etc.).
   - En hijos de **flex/grid**, `z-index` puede aplicarse incluso sin `position`, pero siguen rigiendo los contextos.

4. (Opcional) Muestra un `z-index` **negativo** y qué implica.

## Entregable

Edita SOLO los archivos en `starter/`. La carpeta `solucion/` trae una propuesta resuelta.
