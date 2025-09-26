# JS — Ejercicio 31: Módulos (import/export)

**Objetivo**
Practicar el uso de **módulos ES6** (`export` / `import`) en JavaScript.

## Requisitos

1. **Archivo de utilidades**

   - Crea un archivo `math.js`.
   - Exporta funciones:
     - `sumar(a, b)` → retorna la suma.
     - `restar(a, b)` → retorna la resta.

2. **Exportación múltiple**

   - Exporta también una constante `PI = 3.1416`.

3. **Importación en main.js**

   - Importa `sumar`, `restar` y `PI`.
   - Haz operaciones y muéstralas en consola.

4. **Export default**

   - Añade una función `areaCirculo(radio)` en `math.js` como **export default**.
   - Importa y úsala en `main.js`.

5. **Prueba en el navegador**

   - Enlaza `main.js` en el `index.html` con `<script type="module">`.

6. **(Opcional) Renombrado de importación**
   - Importa `sumar` con un alias (`import { sumar as add }`).

## Entregable

Completa `starter/math.js` y `starter/main.js`. Ejecuta en navegador.
