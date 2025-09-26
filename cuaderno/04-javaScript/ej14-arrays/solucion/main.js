// Ej14 — Arrays

// 1) Creación
let numeros = [1, 2, 3, 4, 5];
let frutas = ["manzana", "pera", "plátano"];
console.log("Números:", numeros);
console.log("Frutas:", frutas);

// 2) Acceso y modificación
console.log("Primer número:", numeros[0]);
console.log("Último número:", numeros[numeros.length - 1]);

frutas[1] = "naranja";
console.log("Frutas modificado:", frutas);

frutas.push("kiwi");
console.log("push:", frutas);

frutas.pop();
console.log("pop:", frutas);

frutas.unshift("uva");
console.log("unshift:", frutas);

frutas.shift();
console.log("shift:", frutas);

// 3) Recorridos
console.log("Recorrido con for:");
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

console.log("Recorrido con for...of:");
for (let fruta of frutas) {
  console.log(fruta);
}

// 4) Métodos comunes
console.log("Length:", frutas.length);
console.log("IndexOf pera:", frutas.indexOf("pera"));
console.log("Includes manzana:", frutas.includes("manzana"));
console.log("Join:", frutas.join(", "));
console.log("Slice (0,2):", frutas.slice(0, 2));
console.log("Splice (1,1,'melón'):", frutas.splice(1, 1, "melón"), frutas);

// 5) Métodos modernos
let dobles = numeros.map((n) => n * 2);
console.log("Map (dobles):", dobles);

let pares = numeros.filter((n) => n % 2 === 0);
console.log("Filter (pares):", pares);

let suma = numeros.reduce((acc, n) => acc + n, 0);
console.log("Reduce (suma):", suma);

// 6) Spread y destructuring
let copiaFrutas = [...frutas];
console.log("Clon con spread:", copiaFrutas);

let [primera, segunda] = frutas;
console.log("Destructuring:", primera, segunda);
