// Ej19 — switch

// 1) Días de la semana
let dia = 3;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Día inválido");
}

// 2) Calificaciones
let nota = "B";
switch (nota) {
  case "A":
    console.log("Excelente");
    break;
  case "B":
    console.log("Notable");
    break;
  case "C":
    console.log("Aprobado");
    break;
  case "D":
    console.log("Suspenso");
    break;
  default:
    console.log("Nota no válida");
}

// 3) Menú
let opcion = 2;
switch (opcion) {
  case 1:
    console.log("Nuevo archivo");
    break;
  case 2:
    console.log("Abrir archivo");
    break;
  case 3:
    console.log("Guardar archivo");
    break;
  default:
    console.log("Opción no reconocida");
}

// 4) Switch con múltiples casos
let color = "rojo";
switch (color) {
  case "rojo":
  case "verde":
    console.log("Colores primarios");
    break;
  case "azul":
    console.log("Color frío");
    break;
  default:
    console.log("Color no definido");
}
