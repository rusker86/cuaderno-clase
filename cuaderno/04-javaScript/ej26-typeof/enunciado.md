// Ej25 — Sets

// 1) Creación
let conjunto = new Set([1, 2, 3, 3, 2, 4]);
console.log("Set inicial:", conjunto);

// 2) Métodos básicos
conjunto.add(5);
console.log("Después de add(5):", conjunto);

conjunto.delete(2);
console.log("Después de delete(2):", conjunto);

console.log("¿Tiene el valor 3?", conjunto.has(3));
console.log("Tamaño del set:", conjunto.size);

// 3) Iteración
console.log("Iteración con for...of:");
for (let valor of conjunto) {
console.log(valor);
}

console.log("Iteración con forEach:");
conjunto.forEach(v => console.log(v));

// 4) Conversión
let arrayDesdeSet = Array.from(conjunto);
console.log("Array desde Set:", arrayDesdeSet);

let arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
let arraySinDuplicados = [...new Set(arrayConDuplicados)];
console.log("Array sin duplicados:", arraySinDuplicados);

// 5) Operaciones entre sets
let A = new Set([1, 2, 3]);
let B = new Set([3, 4, 5]);

// Unión
let union = new Set([...A, ...B]);
console.log("Unión:", union);

// Intersección
let interseccion = new Set([...A].filter(x => B.has(x)));
console.log("Intersección:", interseccion);

// Diferencia
let diferencia = new Set([...A].filter(x => !B.has(x)));
console.log("Diferencia:", diferencia);
