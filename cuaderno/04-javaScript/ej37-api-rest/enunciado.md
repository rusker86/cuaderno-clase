# JS — Ejercicio 37: API REST (GET/POST/PUT/DELETE, headers, errores, reintentos)

**Objetivo**
Consumir una API REST cubriendo:

- Métodos: **GET, POST, PUT/PATCH, DELETE**
- **Headers** (Content-Type, Authorization simulado)
- **Manejo de errores** (status no OK, excepciones)
- **Reintentos** (retry con backoff exponencial)
- **AbortController** (timeout/cancelación)
- (Opcional) **Optimistic UI** y **paginación sencilla** con query params

**API sugerida:** JSONPlaceholder  
`https://jsonplaceholder.typicode.com/posts`

## Requisitos

1. **Cliente API reutilizable**

   - Implementa `apiFetch(url, { method, headers, body, signal })` que:
     - Añada por defecto `headers: { "Content-Type":"application/json" }` si hay `body`.
     - Mezcle un header `Authorization: Bearer FAKE_TOKEN` (simulado).
     - Lance `Error` si `!res.ok` (incluye `res.status` y `res.statusText`).
     - Devuelva `await res.json()`.

2. **GET con query params**

   - Pide `GET /posts?_limit=5&_page=1`.
   - Muestra por consola los IDs y títulos.
   - Parám. de página y límite deben ser variables.

3. **POST (crear)**

   - Envía `POST /posts` con `{ title, body, userId }`.
   - Muestra el objeto devuelto (tendrá `id` mock).

4. **PUT o PATCH (actualizar)**

   - Actualiza el recurso `id=1` (o uno devuelto en el POST).
   - Para `PUT`, envía el recurso completo; para `PATCH`, solo los campos a cambiar.

5. **DELETE**

   - Elimina `id=1` (o el que creaste). JSONPlaceholder responde `{}`
   - Considera éxito si `res.ok`.

6. **Reintentos con backoff**

   - Implementa `withRetry(fn, { retries=2, baseDelay=200 })`.
   - Reintenta en errores de red o status 5xx (no en 4xx).
   - Incrementa el delay: `baseDelay * 2^intento`.

7. **AbortController / Timeout**

   - Implementa `withTimeout(ms, fetchFn)` que aborte si se excede `ms`.
   - Úsalo al menos en un GET.

8. **(Opcional) Optimistic UI (solo log)**

   - Antes de un `POST` o `DELETE`, muestra en consola el estado “optimista”.
   - Si falla, revierte (ménsaje “revertir cambio”).

9. **(Opcional) Paginación**
   - Llama al GET con `page=2` y compáralo.

> Entregable: completa `starter/main.js`. Usa consola para mostrar resultados.
