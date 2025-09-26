# JS — Ejercicio 34: Generators

**Objetivo**
Entender y practicar **generadores** (`function*`) y el protocolo **iterable/iterator**:

- `yield`, `next()`, `value`, `done`
- Enviar valores al generador: `gen.next(valor)`
- `return` y `finally` en generadores
- Delegación con `yield*`
- Uso en `for...of` y propagación (`[...]`)

## Tareas

1. **Generador básico**

   - Crea `function* contador3()` que haga `yield 1`, `yield 2`, `yield 3`.
   - Invoca `next()` varias veces y muestra `{ value, done }`.

2. **for...of y spread**

   - Recorre `contador3()` con `for...of`.
   - Conviértelo a array: `[...contador3()]`.

3. **Generador con parámetros**

   - `function* rango(inicio, fin, paso=1)` que produzca valores desde `inicio` a `fin` (incl.) de `paso` en `paso`.
   - Demuestra `for...of` sobre `rango(0, 5, 2)`.

4. **Enviar valores al generador**

   - Crea `function* eco()` que:
     - haga `const recibido = yield "¿dato?";`
     - devuelva `"recibí: X"` usando lo que entre por `next(X)`.
   - Demuestra la conversación con `gen.next()` / `gen.next("hola")`.

5. **`return`, `try/finally`**

   - Modifica `rango` para envolver el bucle en `try { ... } finally { console.log("cerrando") }`.
   - Llama a `gen.return()` a mitad de la iteración y observa `finally`.

6. **Delegación `yield*`**

   - `function* secuencia(){ yield* contador3(); yield* rango(4,6); }`
   - Recorre `secuencia()` y muestra los valores.

7. **Caso práctico: IDs incrementales (infinito)**
   - `function* ids()` que empiece en 1 y sume 1 infinitamente.
   - Toma los primeros 5 IDs con `next()` y muéstralos.

> Entregable: completa `starter/main.js` y revisa la consola.
