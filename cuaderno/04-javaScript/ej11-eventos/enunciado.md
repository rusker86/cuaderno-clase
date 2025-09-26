# JS — Ejercicio 11: Eventos (DOM)

**Objetivo**
Entender y practicar el modelo de **eventos** en el navegador:

- `addEventListener`, `removeEventListener`
- Eventos comunes: `click`, `input`, `submit`, `keydown`, `change`
- `preventDefault`, `stopPropagation`
- Delegación de eventos
- Opciones (`once`, `passive`, `capture`)

## Tareas

1. **Clicks básicos**

   - Al pulsar el botón `#btn-click` incrementa un contador en `#count`.

2. **Inputs en vivo**

   - Refleja lo que se escribe en `#name` dentro de `#preview` (evento `input`).

3. **Submit con preventDefault**

   - En el formulario `#demo-form`, evita el envío, valida que `#email` no esté vacío y muestra un mensaje.

4. **Teclado**

   - En `document`, captura `keydown` y muestra la última tecla en `#last-key`.

5. **Delegación de eventos**

   - En el contenedor `#list`, detecta clicks en botones `.del` para eliminar su `<li>` padre **sin** asignar listeners a cada botón individual.

6. **Opciones del listener**

   - Registra un listener en `#btn-once` que solo se ejecute **una vez** (`{ once: true }`).

7. **(Opcional) stopPropagation**

   - Pon un listener en `.card` y otro en el botón interior `#inner-btn`. Demuestra `stopPropagation()` en el botón para evitar que se dispare el de la tarjeta.

8. **(Opcional) removeEventListener**
   - Crea un botón `#toggle-keys` que active/desactive el listener global de teclado.

> Entregable: completa `starter/main.js`. No modifiques el HTML salvo para pequeños ids/clases si te es imprescindible.
