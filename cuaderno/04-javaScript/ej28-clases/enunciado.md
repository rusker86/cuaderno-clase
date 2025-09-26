# JS — Ejercicio 28: Clases

**Objetivo**
Practicar la creación y uso de **clases** en JavaScript (Programación Orientada a Objetos).

## Requisitos

1. **Clase simple**

   - Crea una clase `Persona` con propiedades: `nombre` y `edad`.
   - Añade un método `saludar()` que devuelva `"Hola, soy NOMBRE y tengo EDAD años"`.

2. **Instancias**

   - Crea dos objetos `Persona` distintos.
   - Llama a `saludar()` en ambos.

3. **Métodos adicionales**

   - Añade un método `cumplirAnios()` que aumente la edad en 1.

4. **Herencia**

   - Crea una clase `Estudiante` que herede de `Persona`.
   - Añade una propiedad `curso` y un método `presentarse()` que devuelva `"Soy NOMBRE y estudio CURSO"`.

5. **Getters y Setters**

   - En `Persona`, añade un getter para `esMayorDeEdad` (true si edad >= 18).
   - Añade un setter para cambiar el nombre en mayúsculas.

6. **(Opcional) Métodos estáticos**
   - Añade un método estático `crearAnonimo()` en `Persona` que devuelva un objeto con nombre `"Anónimo"` y edad `0`.

## Entregable

Completa el archivo `starter/main.js` y revisa la salida en la consola.
