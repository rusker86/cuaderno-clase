# JS — Ejercicio 32: Depuración (console, debugger, try/catch)

**Objetivo**
Aprender a detectar y arreglar errores usando:

- La **consola** (`log`, `warn`, `error`, `table`, `assert`, `trace`, `time`)
- La sentencia **`debugger`** (breakpoints en DevTools)
- Manejo de **errores** con `try/catch/finally` y `throw`
- (Opcional) Captura global de errores y promesas rechazadas

## Tareas

1. **Consola para inspeccionar**

   - Declara un array de usuarios (2–3 objetos con `id`, `nombre`).
   - Muestra con `console.table(usuarios)`.
   - Mide el tiempo de un bucle con `console.time("loop")` / `console.timeEnd("loop")`.
   - Usa `console.assert(condición, "mensaje")` para validar que todos tienen `id` numérico.
   - Lanza una traza con `console.trace("rastro")` en una función anidada.

2. **`debugger` + breakpoints**

   - Crea una función `calcularTotal(items)` que suma `precio * cantidad` de un array.
   - Inserta una línea `debugger;` dentro del bucle para pausar y examinar variables.
   - (En DevTools) prueba también un **breakpoint condicional** (p.ej., pausar si `cantidad > 3`).

3. **Errores controlados**

   - Crea `parseEdad(valor)` que:
     - Si `valor` no es un número entero ≥ 0, haga `throw new Error("Edad inválida")`.
     - Usa `try/catch` al llamarla y muestra el mensaje con `console.error`.
     - Usa `finally` para loguear `"validación completada"`.

4. **Errores asíncronos**

   - Crea una `fetchFake(id)` que devuelva una **Promise**:
     - `resolve({ok:true,id})` si `id > 0`,
     - `reject(new Error("ID inválido"))` si no.
   - Consume con **`async/await`** dentro de `try/catch` dos casos: `id=1` y `id=-1`.

5. **(Opcional) Captura global**
   - Añade listeners:
     - `window.addEventListener("error", e => ...)`
     - `window.addEventListener("unhandledrejection", e => ...)`
   - Loguea de forma legible el error y evita que la app “muera” silenciosamente.

> Entregable: completa `starter/main.js`, abre el HTML en el navegador y usa DevTools.
