# JS — Ejercicio 36: DOM + Fetch (API REST)

**Objetivo**
Consumir una API pública con **fetch**, manejar **loading/errores**, y **renderizar** resultados en el DOM.

**API sugerida**: JSONPlaceholder

- Lista de posts: `GET https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1`
- Detalle de post: `GET https://jsonplaceholder.typicode.com/posts/:id`
- Crear post (falso): `POST https://jsonplaceholder.typicode.com/posts`  
  _(no se crea de verdad, pero devuelve mock con `id`)_

## Requisitos

1. **Listado inicial**

   - Al cargar, pedir y mostrar 10 posts (título + botón "Ver").
   - Mostrar un **estado de carga** (ej. "Cargando…") mientras llega la respuesta.

2. **Detalle**

   - Al pulsar "Ver" en un post, pedir su detalle y mostrarlo a la derecha
     (título + cuerpo). Indica **cargando** durante la petición.

3. **Crear nuevo post**

   - Formulario con `title` y `body`.
   - Enviar `POST` (JSON) y mostrar el resultado devuelto por la API (incluye `id`).
   - Vaciar el formulario tras éxito. Manejar errores.

4. **Errores**

   - Si la API falla (status no OK o excepción), mostrar un mensaje claro en un área `#status`.

5. **Paginación (simple)**

   - Botones **Anterior** / **Siguiente** para cambiar `_page` (1…N).
   - Deshabilitar "Anterior" en página 1.

6. **(Opcional) Cancelar peticiones**

   - Usa `AbortController` para cancelar la petición anterior si el usuario cambia de página muy rápido.

7. **(Opcional) Accesibilidad**
   - `aria-busy` durante carga, `aria-live="polite"` para mensajes en `#status`.

> Entregable: completa `starter/main.js` y `starter/index.html`. No uses librerías.
