// Ej22 — do...while

// 1) Contador simple
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// 2) Siempre ejecuta al menos una vez
let x = 10;
do {
  console.log("Ejecutado aunque x < 5:", x);
  x++;
} while (x < 5);

// 3) Recorrido array
let numeros = [10, 20, 30, 40];
let j = 0;
do {
  console.log("Elemento:", numeros[j]);
  j++;
} while (j < numeros.length);

// 4) Ejemplo práctico (simulación)
let password = "";
let intentos = 0;
do {
  // en navegador real sería: password = prompt("Introduce contraseña:");
  password = intentos === 2 ? "1234" : "0000"; // simulamos
  console.log("Intento:", intentos + 1, "Contraseña ingresada:", password);
  intentos++;
} while (password !== "1234");
console.log("Acceso permitido");

// 5) Opcional: comparación con while
let k = 1;
while (k <= 5) {
  console.log("while:", k);
  k++;
}
