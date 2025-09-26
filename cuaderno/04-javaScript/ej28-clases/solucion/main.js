// Ej28 — Clases

// 1) Clase Persona
class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, soy ${this._nombre} y tengo ${this.edad} años`;
  }

  cumplirAnios() {
    this.edad++;
  }

  get esMayorDeEdad() {
    return this.edad >= 18;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre.toUpperCase();
  }

  get nombre() {
    return this._nombre;
  }

  static crearAnonimo() {
    return new Persona("Anónimo", 0);
  }
}

// 2) Instancias
let p1 = new Persona("Ada", 28);
let p2 = new Persona("Alan", 17);

console.log(p1.saludar());
console.log(p2.saludar());

// 3) cumplirAnios
p2.cumplirAnios();
console.log("Después de cumplir años:", p2.saludar());

// 4) Herencia
class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }

  presentarse() {
    return `Soy ${this._nombre} y estudio ${this.curso}`;
  }
}

let e1 = new Estudiante("Grace", 20, "Informática");
console.log(e1.presentarse());

// 5) Getters y Setters
console.log(`${p1.nombre} es mayor de edad?`, p1.esMayorDeEdad);
p1.nombre = "charles";
console.log("Nuevo nombre con setter:", p1.nombre);

// 6) Método estático
let anon = Persona.crearAnonimo();
console.log(anon.saludar());
