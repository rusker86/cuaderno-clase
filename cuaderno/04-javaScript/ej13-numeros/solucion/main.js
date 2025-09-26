// Ej13 — Números

// 1) Creación
let entero = 42;
let decimal = 3.1416;
let comoString = "42";
let convertido = Number(comoString);
console.log("Entero:", entero, "Decimal:", decimal, "Convertido:", convertido);

// 2) Propiedades y métodos
console.log("Decimal con 2 decimales:", decimal.toFixed(2));
console.log("Número a string:", entero.toString());
console.log("parseInt '10.5kg':", parseInt("10.5kg"));
console.log("parseFloat '10.5kg':", parseFloat("10.5kg"));

// 3) Operaciones
console.log("Suma:", 10 + 5);
console.log("Resta:", 10 - 5);
console.log("Multiplicación:", 10 * 5);
console.log("División:", 10 / 5);
console.log("Módulo:", 10 % 3);

// 4) NaN
let invalido = Number("Hola");
console.log("Invalido:", invalido, "isNaN:", isNaN(invalido));

// 5) Infinity
console.log("Positivo entre 0:", 10 / 0); // Infinity
console.log("Negativo entre 0:", -10 / 0); // -Infinity

// 6) Métodos útiles
console.log("Es entero 42?", Number.isInteger(entero));
console.log("Es entero 3.14?", Number.isInteger(decimal));
console.log("Es finito Infinity?", Number.isFinite(Infinity));
console.log("Redondeo 3.6:", Math.round(3.6));
console.log("Floor 3.6:", Math.floor(3.6));
console.log("Ceil 3.1:", Math.ceil(3.1));

// 7) Opcional
let millon = 1_000_000;
console.log("Separadores numéricos:", millon);
let grande = 123456789012345678901234567890n; // BigInt
console.log("BigInt:", grande);
