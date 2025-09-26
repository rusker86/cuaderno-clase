// Ej18 — if/else

// 1) Condicional simple
let edad = 20;
if (edad >= 18) {
  console.log("Eres mayor de edad");
}

// 2) Condicional con else
edad = 15;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// 3) Condicional múltiple
let nota = 8;
if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 7) {
  console.log("Notable");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}

// 4) Condicionales anidados
let usuario = { activo: true, rol: "admin" };

if (usuario.activo) {
  if (usuario.rol === "admin") {
    console.log("Acceso total");
  } else if (usuario.rol === "editor") {
    console.log("Acceso limitado");
  } else {
    console.log("Acceso básico");
  }
} else {
  console.log("Usuario inactivo");
}

// 5) Operador ternario
let numero = 7;
let resultado = numero % 2 === 0 ? "Par" : "Impar";
console.log(`El número ${numero} es ${resultado}`);
