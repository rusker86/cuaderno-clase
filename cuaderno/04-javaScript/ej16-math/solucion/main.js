// Ej16 — Math

// 1) Constantes
console.log("PI:", Math.PI);
console.log("E:", Math.E);

// 2) Redondeo
let num = 7.6;
console.log("Round:", Math.round(num)); // 8
console.log("Floor:", Math.floor(num)); // 7
console.log("Ceil:", Math.ceil(num)); // 8

// 3) Potencias y raíces
console.log("2^5 con pow:", Math.pow(2, 5));
console.log("2^5 con **:", 2 ** 5);
console.log("Raíz cuadrada de 81:", Math.sqrt(81));

// 4) Abs, min y max
console.log("Abs de -42:", Math.abs(-42));
console.log("Min:", Math.min(3, 9, -1, 7));
console.log("Max:", Math.max(3, 9, -1, 7));

// 5) Aleatorios
console.log("Random:", Math.random());
let aleatorio = Math.floor(Math.random() * 10) + 1;
console.log("Entero entre 1 y 10:", aleatorio);

// 6) Trigonometría
let angulo = Math.PI / 4;
console.log("sin(π/4):", Math.sin(angulo));
console.log("cos(π/4):", Math.cos(angulo));
console.log("tan(π/4):", Math.tan(angulo));

// 7) Opcional
console.log("Trunc 7.9:", Math.trunc(7.9));
console.log("Sign -5:", Math.sign(-5));
console.log("Sign 0:", Math.sign(0));
console.log("Sign 7:", Math.sign(7));
