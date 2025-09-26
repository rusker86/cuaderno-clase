// Ej10 — Objetos

// 1) Objeto literal
let persona = {
  nombre: "Ada",
  edad: 28,
  profesion: "programadora",
};
console.log("Persona inicial:", persona);
console.log("Acceso con punto:", persona.nombre);
console.log("Acceso con []:", persona["edad"]);

// 2) Modificar propiedades
persona.edad = 29;
persona.email = "ada@example.com";
delete persona.profesion;
console.log("Persona modificada:", persona);

// 3) Métodos
persona.saludar = function () {
  return `Hola, soy ${this.nombre}`;
};
console.log(persona.saludar());

// 4) Anidación
persona.direccion = {
  calle: "C/ Programación 42",
  ciudad: "Londres",
};
console.log("Ciudad:", persona.direccion.ciudad);

// 5) Recorrer propiedades
console.log("for...in:");
for (let clave in persona) {
  console.log(clave, ":", persona[clave]);
}
console.log("Object.keys:", Object.keys(persona));
console.log("Object.values:", Object.values(persona));
console.log("Object.entries:", Object.entries(persona));

// 6) Clonado y referencia
let copiaRef = persona;
copiaRef.nombre = "Alan"; // modifica también persona
console.log("copiaRef y persona comparten referencia:", persona.nombre);

let clon = { ...persona }; // clon superficial
clon.nombre = "Grace";
console.log("Clon independiente:", clon.nombre, "vs persona:", persona.nombre);
