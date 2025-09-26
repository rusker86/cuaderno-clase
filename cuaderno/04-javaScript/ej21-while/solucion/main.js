// Ej21 — while

// 1) Contador simple
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 2) Contador inverso
let j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}

// 3) Suma acumulada
let numeros = [2, 4, 6, 8, 10];
let k = 0;
let suma = 0;
while (k < numeros.length) {
  suma += numeros[k];
  k++;
}
console.log("Suma total:", suma);

// 4) Condición booleana
let activo = true;
let contador = 0;
while (activo) {
  contador++;
  console.log("Contador:", contador);
  if (contador === 3) {
    activo = false;
  }
}

// 5) Ejemplo práctico
let intentos = 3;
while (intentos > 0) {
  console.log("Intento", intentos);
  intentos--;
}
console.log("Sin intentos restantes");

// 6) Opcional: comparación con for
for (let n = 1; n <= 5; n++) {
  console.log("for:", n);
}
