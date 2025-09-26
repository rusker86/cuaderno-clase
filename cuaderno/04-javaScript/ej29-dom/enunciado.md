# JS — Ejercicio 29: DOM (selección y manipulación)

**Objetivo**
Practicar lo esencial del **DOM** en el navegador:

- Selección (`getElementById`, `querySelector(All)`)
- Lectura/escritura de contenido (`textContent` vs `innerHTML`)
- Atributos y `dataset`
- Clases (`classList`) y estilos inline
- Crear/insertar/eliminar nodos (`createElement`, `append`, `before`, `remove`)
- Recorrido (`parentNode`, `children`)
- Performance con `DocumentFragment`
- `DOMContentLoaded`

## Tareas

1. **Selección**

   - Selecciona `#title`, `.item` y `#list` con distintos métodos (al menos dos: `getElementById`, `querySelector`/`All`).

2. **Contenido**

   - Cambia el texto de `#title` usando `textContent`.
   - Añade un **badge** dentro de `#title` usando `innerHTML` (p.ej. `<span class="badge">Nuevo</span>`). Comenta la diferencia entre ambos.

3. **Atributos & dataset**

   - En la primera `.item`, añade atributo `title="Elemento destacado"`.
   - Añade un `data-priority="alta"` mediante `dataset`.

4. **Clases & estilos**

   - Alterna la clase `.highlight` en la segunda `.item` con `classList.toggle`.
   - Aplica un estilo inline solo a esa `.item` (p.ej. `style.border = '1px solid #999'`).

5. **Crear e insertar**

   - Crea un `<li class="item">` con texto `"Elemento nuevo"` y añádelo al final de `#list` con `append`.
   - Inserta otro `<li>` antes del **primer** elemento con `before`.

6. **Eliminar**

   - Elimina el último elemento de la lista (usa `lastElementChild.remove()`).

7. **Recorrido**

   - Desde `#list`, muestra por consola su `parentNode`, y recorre sus `children` para loguear sus textos.

8. **Fragment para performance**

   - Crea un `DocumentFragment` y añade 100 `<li>` (`Item #1`…`Item #100`) y luego inserta todo de una vez en `#list`.

9. **DOMContentLoaded**
   - Asegúrate de que el script manipula el DOM **después** de `DOMContentLoaded` (envolver en listener o poner el script al final).

> Entregable: completa `starter/main.js`. No cambies el HTML salvo donde se te pida.
