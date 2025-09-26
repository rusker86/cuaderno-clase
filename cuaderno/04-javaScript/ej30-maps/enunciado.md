# JS — Ejercicio 30: Maps

**Objetivo**
Practicar el uso de **Map**, una colección clave → valor en JavaScript.

## Requisitos

1. **Creación**

   - Declara un `Map` vacío.
   - Añade elementos con `.set(clave, valor)`.
   - Añade: `"nombre" → "Ada"`, `"edad" → 28`, `"rol" → "programadora"`.

2. **Acceso**

   - Usa `.get("nombre")` para mostrar el valor.
   - Comprueba si existe `"edad"` con `.has()`.

3. **Modificación y eliminación**

   - Cambia `"edad"` a `29`.
   - Elimina `"rol"` con `.delete()`.
   - Muestra el tamaño con `.size`.

4. **Recorrido**

   - Recorre el Map con `for...of`.
   - Usa `.forEach()` para recorrer.

5. **Conversión**

   - Convierte el Map a un array de pares con `Array.from(map)`.
   - Convierte el Map a un objeto normal.

6. **Ejemplo práctico**

   - Crea un Map `usuarios` donde la clave sea el `id` (1,2,3) y el valor sea un objeto con `{nombre, edad}`.
   - Recorre el Map mostrando `"Usuario 1: Ada (28 años)"`, etc.

7. **(Opcional) Inicialización rápida**
   - Declara un Map directamente con `[["a",1],["b",2]]`.

## Entregable

Completa `starter/main.js` y revisa los resultados en la consola.
