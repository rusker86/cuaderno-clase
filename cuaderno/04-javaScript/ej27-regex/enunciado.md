# JS — Ejercicio 27: Expresiones Regulares

**Objetivo**
Practicar el uso de **expresiones regulares (regex)** en JavaScript.

## Requisitos

1. **Búsqueda simple**

   - Declara una cadena `"Hola mundo"`.
   - Usa una expresión regular para comprobar si incluye `"Hola"`.

2. **Métodos básicos**

   - Usa `.test()` con una regex para comprobar si un string contiene `"mundo"`.
   - Usa `.exec()` con una regex sobre la misma cadena.

3. **Coincidencias en texto**

   - Declara un string `"La lluvia en Sevilla es una maravilla"`.
   - Usa `.match()` para encontrar todas las palabras que terminan en `"illa"`.

4. **Reemplazo**

   - Reemplaza todas las vocales de un string por `*` usando `.replace()` y una regex global.

5. **Clases de caracteres**

   - Declara un string con números `"Mi número es 12345"`.
   - Usa una regex para extraer los dígitos.

6. **Validación básica**

   - Comprueba si un email `"ada@example.com"` es válido con una regex simple:  
     `/^\S+@\S+\.\S+$/`

7. **(Opcional) Flags**
   - Practica con `i` (insensible a mayúsculas) y `g` (global).

## Entregable

Completa el archivo `starter/main.js` y revisa los resultados en la consola.
