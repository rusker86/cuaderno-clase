// Ej15 — Fechas

// 1) Creación
let hoy = new Date();
let fechaString = new Date("2025-01-01");
let fechaYM = new Date(2025, 0, 1); // meses empiezan en 0
console.log("Hoy:", hoy);
console.log("Desde string:", fechaString);
console.log("Desde año/mes/día:", fechaYM);

// 2) Métodos básicos
console.log("Año:", hoy.getFullYear());
console.log("Mes:", hoy.getMonth() + 1); // +1 porque empieza en 0
console.log("Día:", hoy.getDate());
console.log("Día semana (0=domingo):", hoy.getDay());
console.log("Hora:", hoy.getHours());
console.log("Minutos:", hoy.getMinutes());
console.log("Segundos:", hoy.getSeconds());

// 3) Formateo
console.log("toDateString:", hoy.toDateString());
console.log("toISOString:", hoy.toISOString());
console.log("toLocaleDateString (ES):", hoy.toLocaleDateString("es-ES"));

// 4) Operaciones
let mas7 = new Date(hoy);
mas7.setDate(mas7.getDate() + 7);
console.log("Hoy +7 días:", mas7);

let finAno = new Date("2025-12-31");
let diffMs = finAno - hoy; // milisegundos
let diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log("Días hasta 31/12/2025:", diffDias);

// 5) Comparaciones
console.log("¿Hoy es antes de fin de año?", hoy < finAno);
console.log("¿Hoy es después de 2025-01-01?", hoy > fechaString);

// 6) Opcional: Intl.DateTimeFormat
let formatoES = new Intl.DateTimeFormat("es-ES", { dateStyle: "full" });
console.log("Formato largo ES:", formatoES.format(hoy));
