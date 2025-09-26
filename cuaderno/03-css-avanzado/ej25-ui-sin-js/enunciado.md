# Ejercicio 25 — UI sin JS: `:target`, `:checked`, `:has()`

**Objetivo**  
Construir componentes interactivos **sin JavaScript** usando solo CSS: **modal**, **toast**, **tabs** y **off-canvas**. Practicar `:target`, `:checked` y `:has()` para controlar estados.

## Retos

1. **Modal con `:target`**

   - Botón “Abrir modal” (link a `#modal`).
   - El modal se muestra cuando `#modal:target`.
   - Fondo oscurecido (_overlay_) que cierra al pulsarlo (enlaza a `#`).
   - Botón **Cerrar** dentro del modal (enlaza a `#`).
   - Accesible: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.

2. **Toast de confirmación**

   - Caja `.toast` que aparece al visitar `#ok` (o al marcar un checkbox).
   - Se posiciona fija en una esquina, con auto-ocultación manual (link cerrar → `#`).
   - `aria-live="polite"`.

3. **Tabs con `:checked`**

   - 3 pestañas con inputs `type="radio"` **ocultos** compartiendo `name`.
   - Estilos de pestaña activa cuando el radio está `:checked`.
   - Paneles mostrados/ocultos en función del radio.

4. **Off-canvas (drawer)**

   - Menú lateral que se abre con un checkbox `#nav-toggle`.
   - El contenedor padre cambia con `:has(#nav-toggle:checked)` (p.ej., empuja el contenido o pone un overlay).

5. **(Opcional) `:has()` para estados agregados**
   - Resaltar un `header` cuando **cualquiera** de estos esté activo: modal abierto, drawer abierto, o existe `#ok:target`.

### Notas importantes

- Sin JS no puedes **atrapar el foco** en el modal; evita trampas de teclado y mantén `:focus-visible` claro.
- Usa enlaces (`<a href="#…">`) para alternar `:target`; usa `label for="id"` para el estado de `:checked`.
- Añade `prefers-reduced-motion` para desactivar transiciones si procede.

## Entregable

Edita **solo** `starter/`. La referencia está en `/solucion`.
