# JS — Ejercicio 15: Fechas (Date)

**Objetivo**
Practicar la creación y manipulación de fechas con el objeto **Date** en JavaScript.

## Requisitos

1. **Creación de fechas**

   - Fecha actual con `new Date()`.
   - Fecha a partir de un string (`"2025-01-01"`).
   - Fecha a partir de año, mes, día (`new Date(2025, 0, 1)`).

2. **Métodos básicos**

   - Obtener el año (`getFullYear()`), mes (`getMonth()`), día (`getDate()`).
   - Obtener el día de la semana (`getDay()` → 0=domingo).
   - Obtener horas, minutos y segundos.

3. **Formateo**

   - Convierte la fecha a string con `.toDateString()`, `.toISOString()`, `.toLocaleDateString()`.

4. **Operaciones con fechas**

   - Suma 7 días a la fecha actual.
   - Calcula la diferencia en días entre `"2025-12-31"` y hoy.

5. **Comparaciones**

   - Compara si una fecha es mayor que otra con `>`, `<`.

6. **(Opcional) Intl.DateTimeFormat**
   - Usa `Intl.DateTimeFormat("es-ES", { dateStyle: "full" })` para mostrar en formato largo en español.

## Entregable

Completa el archivo `starter/main.js` y revisa la salida en la consola.
