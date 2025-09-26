// Ej27 — Expresiones Regulares

// 1) Búsqueda simple
let texto = "Hola mundo";
let regexHola = /Hola/;
console.log("Incluye 'Hola'?", regexHola.test(texto));

// 2) Métodos básicos
let regexMundo = /mundo/;
console.log("test():", regexMundo.test(texto));
console.log("exec():", regexMundo.exec(texto));

// 3) Coincidencias en texto
let frase = "La lluvia en Sevilla es una maravilla";
let regexIlla = /\w*illa/g;
console.log("Palabras terminadas en 'illa':", frase.match(regexIlla));

// 4) Reemplazo
let frase2 = "Hola mundo";
let regexVocales = /[aeiou]/gi;
console.log("Reemplazo vocales:", frase2.replace(regexVocales, "*"));

// 5) Clases de caracteres
let conNumeros = "Mi número es 12345";
let regexDigitos = /\d+/g;
console.log("Dígitos:", conNumeros.match(regexDigitos));

// 6) Validación básica de email
let email = "ada@example.com";
let regexEmail = /^\S+@\S+\.\S+$/;
console.log("¿Email válido?", regexEmail.test(email));

// 7) Opcional: flags
let regexInsensitive = /HOLA/i;
console.log("Insensitive:", regexInsensitive.test("hola mundo"));

let regexGlobal = /a/g;
console.log("Global match:", frase.match(regexGlobal));
