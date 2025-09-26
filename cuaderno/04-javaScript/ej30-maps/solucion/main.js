// Ej30 — Maps

// 1) Creación
let persona = new Map();
persona.set("nombre", "Ada");
persona.set("edad", 28);
persona.set("rol", "programadora");

// 2) Acceso
console.log("Nombre:", persona.get("nombre"));
console.log("¿Tiene edad?", persona.has("edad"));

// 3) Modificación y eliminación
persona.set("edad", 29);
persona.delete("rol");
console.log("Tamaño del map:", persona.size);

// 4) Recorrido
console.log("Recorrido con for...of:");
for (let [clave, valor] of persona) {
  console.log(`${clave}: ${valor}`);
}

console.log("Recorrido con forEach:");
persona.forEach((valor, clave) => {
  console.log(`${clave} → ${valor}`);
});

// 5) Conversión
let arrayPares = Array.from(persona);
console.log("Array de pares:", arrayPares);

let objNormal = Object.fromEntries(persona);
console.log("Objeto normal:", objNormal);

// 6) Ejemplo práctico
let usuarios = new Map();
usuarios.set(1, { nombre: "Ada", edad: 28 });
usuarios.set(2, { nombre: "Alan", edad: 35 });
usuarios.set(3, { nombre: "Grace", edad: 40 });

for (let [id, user] of usuarios) {
  console.log(`Usuario ${id}: ${user.nombre} (${user.edad} años)`);
}

// 7) Opcional: inicialización rápida
let letras = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log("Map inicializado rápido:", letras);
