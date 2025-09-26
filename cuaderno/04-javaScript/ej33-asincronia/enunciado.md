# JS — Ejercicio 33: Asincronía (callbacks, Promesas, async/await)

**Objetivo**
Entender y practicar los 3 estilos principales de asincronía en JS:

- **Callbacks** (`setTimeout`, funciones callback)
- **Promesas** (`new Promise`, `.then/.catch/.finally`)
- **async/await** (azúcar sintáctico sobre Promesas)
  Además: **Promise.all** y manejo de errores.

## Tareas

1. **Callback básico**

   - Crea `esperar(ms, cb)` que use `setTimeout` y llame a `cb()` tras `ms`.
   - Demuestra su uso (log antes/después y dentro del callback).

2. **Callback hell (mini)**

   - Encadena 3 esperas: 300ms → 200ms → 100ms y loguea el orden.
   - Comenta por qué esto escala mal.

3. **Promesa básica**

   - Crea `esperarP(ms)` que devuelva una `Promise` que resuelva tras `ms`.
   - Úsala con `.then/.catch/.finally`.

4. **Promesa que puede fallar**

   - Crea `tareaAleatoria()` que **resuelva** con `{ok:true}` o **rechace** con `Error("falló")` con 50% de prob.
   - Maneja ambos casos con `.then/.catch`.

5. **async/await**

   - Crea `async function flujo()` que:
     - `await esperarP(200)`
     - intenta `await tareaAleatoria()` dentro de `try/catch`
     - usa `finally` para loguear `"flujo terminado"`.

6. **Promise.all**

   - Lanza en paralelo `esperarP(300)`, `esperarP(200)`, `esperarP(100)` y espera a todas.
   - Mide tiempo con `console.time/timeEnd`.

7. **(Opcional) Carreras**
   - Usa `Promise.race([esperarP(1000), esperarP(150)])` y explica el resultado.

> Entregable: completa `starter/main.js` y observa el orden de logs en la consola.
