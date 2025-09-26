// Ej12 — Strings

// 1) Creación
let nombre = "Ada";
let apellido = "Lovelace";
let completo1 = nombre + " " + apellido;
let completo2 = `${nombre} ${apellido}`;
console.log("Concatenado (+):", completo1);
console.log("Template string:", completo2);

// 2) Propiedades básicas
console.log("Longitud:", completo1.length);
console.log("Primera letra:", completo1[0]);
console.log("Última letra:", completo1[completo1.length - 1]);

// 3) Métodos comunes
console.log("Mayúsculas:", nombre.toUpperCase());
console.log("Minúsculas:", apellido.toLowerCase());
console.log("3 primeras letras de apellido:", apellido.slice(0, 3));
console.log("Incluye 'love'?", apellido.includes("love"));
console.log("Replace Ada → Augusta:", completo1.replace("Ada", "Augusta"));

// 4) Trim y split
let saludo = "  Hola mundo  ";
console.log("Trim:", saludo.trim());
let lista = "Ada,Alan,Grace";
console.log("Split:", lista.split(","));

// 5) Template avanzado
console.log(
  `Mi nombre completo es ${completo1} y tiene ${completo1.length} caracteres`
);

// 6) Opcional
console.log("Empieza con 'Ada'?", completo1.startsWith("Ada"));
console.log("Termina con 'lace'?", completo1.endsWith("lace"));
console.log("Repetir nombre:", nombre.repeat(3));
console.log("Emoji length vs visual:", "😀".length, "😀😀".length);
