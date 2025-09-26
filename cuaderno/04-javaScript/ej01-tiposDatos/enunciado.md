# JS — Ejercicio 01: Tipos de datos

**Objetivo**
Reconocer y manipular los **tipos de datos** en JavaScript:

- Primitivos: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null`
- No primitivos: `object` (objetos, arrays, funciones, fechas, etc.)
- Herramientas: `typeof`, `Array.isArray`, `instanceof`, `Number.isNaN`

## Tareas

1. **Declara valores** de cada tipo primitivo y comprueba su tipo con `typeof`.
2. **Crea referencias** no primitivas:
   - Un objeto literal con 2–3 propiedades.
   - Un array con elementos variados.
   - Una función simple.
   - Una fecha (`new Date()`).
3. **Comprueba**:
   - `typeof` de cada valor (incluido `null`).
   - `Array.isArray` para el array.
   - `instanceof Date` para la fecha.
4. **Coerciones y NaN**
   - Suma `"5"` + `5` y explica el resultado.
   - Intenta convertir `"abc"` a número. ¿Qué obtienes?
   - Diferencia `NaN` vs `Infinity`.
5. **BigInt & Symbol**
   - Crea un `BigInt` y prueba una operación.
   - Crea dos `Symbol` con la misma descripción y compáralos.
6. **Mutabilidad**
   - Muestra que **primitivos** se copian por **valor** y objetos por **referencia** con un ejemplo corto.

> Entregable: escribe el código en `starter/main.js` y revisa la consola del navegador.
