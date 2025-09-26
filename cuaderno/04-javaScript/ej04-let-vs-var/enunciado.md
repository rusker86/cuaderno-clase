# JS — Ejercicio 04: let vs var

**Objetivo**
Comprender las diferencias entre `let` y `var` en cuanto a **ámbito (scope)** y **hoisting**.

## Requisitos

1. **Ámbito de bloque**

   - Declara una variable con `var` dentro de un bloque `{}` y comprueba si existe fuera.
   - Declara otra con `let` dentro del mismo bloque y comprueba si existe fuera.

2. **Ámbito en bucles**

   - Declara un bucle `for` con `var i` y muestra `i` fuera del bucle.
   - Declara un bucle `for` con `let j` y muestra si `j` existe fuera del bucle.

3. **Hoisting**

   - Intenta usar una variable declarada con `var` **antes de declararla**: ¿qué valor tiene?
   - Intenta usar una variable declarada con `let` antes de declararla: ¿qué error ocurre?

4. **Conclusiones**
   - Resume en un comentario las diferencias principales:
     - `var` → ámbito de función o global, hoisting inicializado como `undefined`.
     - `let` → ámbito de bloque, zona temporal muerta (TDZ).

## Entregable

Escribe el código en `starter/main.js` y revisa los resultados en la consola.
