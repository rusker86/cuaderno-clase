// Ej06 — console.log() y consola

// 1) Uso básico
console.log("Hola mundo");
console.log(42);
console.log(true);
console.log({ nombre: "Ada", rol: "dev" });
console.log([1, 2, 3, 4]);

// combinando
console.log("Usuario:", "Ada", "Edad:", 28);

// 2) Otros métodos
console.error("¡Esto es un error!");
console.warn("Aviso: estás usando una función obsoleta.");
console.table([
  { id: 1, nombre: "Ada" },
  { id: 2, nombre: "Alan" },
]);

// 3) Interpolación
const nombre = "Ada";
console.log(`Hola, ${nombre}. Bienvenida al curso.`);

// 4) Agrupación
console.group("Usuarios");
console.log("Usuario 1: Ada");
console.log("Usuario 2: Alan");
console.groupEnd();

// 5) Contadores y tiempos
for (let i = 0; i < 3; i++) {
  console.count("Iteración");
}

console.time("bucle grande");
let total = 0;
for (let i = 0; i < 1_000_000; i++) {
  total += i;
}
console.timeEnd("bucle grande");

// Limpiar (opcional, comenta si no quieres perder lo anterior)
// console.clear();
