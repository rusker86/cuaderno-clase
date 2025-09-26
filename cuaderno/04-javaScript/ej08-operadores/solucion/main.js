// Ej08 — Operadores

// 1) Aritméticos
let a = 10,
  b = 3;
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.333...
console.log("a % b =", a % b); // 1
console.log("a ** b =", a ** b); // 1000

// 2) Asignación
let x = 5;
x += 2; // 7
x -= 1; // 6
x *= 3; // 18
x /= 2; // 9
x %= 4; // 1
console.log("Resultado final de x:", x);

// 3) Comparación
console.log("5 == '5' ?", 5 == "5"); // true (compara valor)
console.log("5 === '5' ?", 5 === "5"); // false (compara valor y tipo)
console.log("5 != '5' ?", 5 != "5"); // false
console.log("5 !== '5' ?", 5 !== "5"); // true
console.log("10 > 3 ?", 10 > 3);
console.log("10 <= 3 ?", 10 <= 3);

// 4) Lógicos
let edad = 20;
let tieneCarnet = true;
console.log("Mayor de edad y carnet?", edad >= 18 && tieneCarnet);
console.log("Mayor de edad o carnet?", edad >= 18 || tieneCarnet);
console.log("No tiene carnet?", !tieneCarnet);

// 5) Ternario
let permiso = edad >= 18 ? "Acceso permitido" : "Acceso denegado";
console.log("Ternario:", permiso);

// 6) Opcional: ?? y ?.
let valor = null;
console.log("Con ??", valor ?? "Por defecto"); // "Por defecto"

let usuario = { perfil: { nombre: "Ada" } };
console.log("Nombre usuario:", usuario?.perfil?.nombre); // "Ada"
console.log("Propiedad inexistente:", usuario?.direccion?.ciudad); // undefined
