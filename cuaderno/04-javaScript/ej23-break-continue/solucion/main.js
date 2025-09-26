// Ej23 — break y continue

// 1) Break en for
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Encontrado 5, se detiene el bucle");
    break;
  }
  console.log(i);
}

// 2) Continue en for
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // saltar pares
  console.log("Impar:", i);
}

// 3) Break en while
let i = 0;
while (i <= 10) {
  if (i === 7) {
    console.log("i llegó a 7, break");
    break;
  }
  console.log(i);
  i++;
}

// 4) Continue en while
let j = 0;
while (j <= 10) {
  j++;
  if (j === 3) continue; // saltar el 3
  console.log(j);
}

// 5) Ejemplo práctico
let nums = [3, 6, -1, 8, -4, 9];
for (let n of nums) {
  if (n < 0) continue; // saltar negativos
  if (n === 9) {
    console.log("Encontrado 9, detener bucle");
    break;
  }
  console.log("Número válido:", n);
}
