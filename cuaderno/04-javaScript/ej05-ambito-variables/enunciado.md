# JS — Ejercicio 05: Ámbito de las variables (scope)

**Objetivo**
Comprender cómo funcionan los distintos **ámbitos de las variables** en JavaScript:

- Global
- De función
- De bloque
- Encadenamiento de scopes (scope chain)

## Requisitos

1. **Ámbito global**

   - Declara una variable global (fuera de cualquier función o bloque).
   - Accede a ella desde diferentes funciones y bloques.

2. **Ámbito de función**

   - Declara una variable dentro de una función.
   - Intenta acceder a ella fuera de la función y observa el error.

3. **Ámbito de bloque**

   - Declara una variable con `let` dentro de un bloque `{}`.
   - Comprueba si existe fuera de ese bloque.

4. **Encadenamiento de scopes**

   - Declara una variable `mensaje` en el ámbito global.
   - Crea una función que declare otra variable `mensaje` con un valor distinto.
   - Dentro de esa función, declara otra función interna que intente acceder a `mensaje`.
   - Observa cuál `mensaje` se utiliza (scope chain).

5. **(Opcional) Diferencia con var**
   - Repite algún ejemplo con `var` para ver cómo ignora el ámbito de bloque.

## Entregable

Completa el archivo `starter/main.js` y revisa la salida en consola.
