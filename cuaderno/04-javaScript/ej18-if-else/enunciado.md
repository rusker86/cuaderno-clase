# JS — Ejercicio 18: if / else

**Objetivo**
Practicar el uso de las estructuras condicionales **if**, **else if** y **else**.

## Requisitos

1. **Condicional simple**

   - Declara una variable `edad`.
   - Si es mayor o igual a 18, muestra `"Eres mayor de edad"`.

2. **Condicional con else**

   - Si la edad es menor de 18, muestra `"Eres menor de edad"`.

3. **Condicional múltiple (else if)**

   - Declara una variable `nota`.
   - Si `nota >= 9` → `"Sobresaliente"`.
   - Si `nota >= 7` → `"Notable"`.
   - Si `nota >= 5` → `"Aprobado"`.
   - Si `nota < 5` → `"Suspenso"`.

4. **Condicionales anidados**

   - Declara una variable `usuario = { activo: true, rol: "admin" }`.
   - Si `usuario.activo`:
     - Si `usuario.rol` es `"admin"`, muestra `"Acceso total"`.
     - Si `usuario.rol` es `"editor"`, muestra `"Acceso limitado"`.
     - En otro caso, muestra `"Acceso básico"`.
   - Si no está activo, muestra `"Usuario inactivo"`.

5. **(Opcional) Operador ternario**
   - Usa un ternario para comprobar si un número es par o impar.

## Entregable

Completa `starter/main.js` y revisa los resultados en la consola.
