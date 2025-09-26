# JS — Ejercicio 24: Iterables y for...of

**Objetivo**
Practicar el recorrido de **iterables** en JavaScript usando `for...of`.

## Requisitos

1. **Array**

   - Declara un array de nombres `["Ada", "Alan", "Grace"]`.
   - Recorre el array con `for...of` y muestra cada nombre.

2. **String**

   - Declara un string `"Hola"`.
   - Recorre cada letra con `for...of`.

3. **Set**

   - Declara un `Set` con `[1, 2, 3, 3, 2]`.
   - Recorre sus valores con `for...of`.

4. **Map**

   - Declara un `Map` con pares clave-valor:  
     `"nombre" → "Ada"`, `"edad" → 28`, `"rol" → "programadora"`.
   - Recorre el map con `for...of` mostrando clave y valor.

5. **for...of con entries**

   - Recorre un array con `for...of` y `entries()` para mostrar índice y valor.

6. **(Opcional) Iterables personalizados**
   - Crea un objeto iterable que genere los números del 1 al 3 con `Symbol.iterator`.
   - Recorre el objeto con `for...of`.

## Entregable

Completa el archivo `starter/main.js` y revisa los resultados en la consola.
