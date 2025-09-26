// Ej20 — for

// 1) Contador simple
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2) Contador inverso
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 3) Iteración array
let frutas = ["manzana", "pera", "plátano"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// 4) Suma acumulada
let numeros = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("Suma total:", suma);

// 5) Anidado
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 6) Opcional
// for...of
for (let fruta of frutas) {
  console.log("for...of:", fruta);
}

// for...in (recorriendo propiedades de un objeto)
let persona = { nombre: "Ada", edad: 28, rol: "programadora" };
for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
