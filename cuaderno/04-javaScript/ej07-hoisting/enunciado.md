# JS — Ejercicio 07: Hoisting

**Objetivo**
Entender cómo JavaScript “eleva” (hoisting) las declaraciones de variables y funciones al inicio de su ámbito.

## Requisitos

1. **Variables con var**

   - Intenta usar una variable `var` antes de declararla.
   - Muestra en consola su valor y explica el resultado.

2. **Variables con let y const**

   - Intenta usar una variable `let` o `const` antes de declararla.
   - Observa el error (zona temporal muerta, TDZ).

3. **Funciones declaradas**

   - Llama a una función declarada con `function` antes de su definición.
   - Verifica que funciona gracias al hoisting.

4. **Funciones expresadas**

   - Intenta llamar a una función guardada en una variable (`const f = function(){}`) antes de declararla.
   - Observa el error.

5. **Conclusión**
   - Resume con comentarios:
     - `var` → se eleva y se inicializa como `undefined`.
     - `let` / `const` → se elevan pero no se inicializan (TDZ).
     - `function` → se eleva completamente.
     - `function expresada` → se trata como variable (`undefined` hasta la asignación).

## Entregable

Completa `starter/main.js` y revisa los resultados en la consola.
