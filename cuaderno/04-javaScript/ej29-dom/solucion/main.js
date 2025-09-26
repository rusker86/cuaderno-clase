// Ej29 — DOM (solución)
document.addEventListener("DOMContentLoaded", () => {
  // 1) Selección
  const titleById = document.getElementById("title");
  const firstItem = document.querySelector(".item");
  const allItems = document.querySelectorAll(".item");
  const list = document.querySelector("#list");
  console.log("Seleccionados:", {
    titleById,
    firstItem,
    list,
    count: allItems.length,
  });

  // 2) Contenido
  titleById.textContent = "Lista de tareas (actualizada)";
  // textContent inserta texto plano; innerHTML interpreta HTML (ojo con seguridad).
  titleById.innerHTML += ' <span class="badge">Nuevo</span>';

  // 3) Atributos & dataset
  firstItem.setAttribute("title", "Elemento destacado");
  firstItem.dataset.priority = "alta";

  // 4) Clases & estilos
  const secondItem = allItems[1];
  secondItem.classList.toggle("highlight");
  secondItem.style.border = "1px solid #999";

  // 5) Crear e insertar
  const liNew = document.createElement("li");
  liNew.className = "item";
  liNew.textContent = "Elemento nuevo";
  list.append(liNew);

  const liBefore = document.createElement("li");
  liBefore.className = "item";
  liBefore.textContent = "Elemento al principio";
  // insertar antes del primer li actual
  list.firstElementChild.before(liBefore);

  // 6) Eliminar
  list.lastElementChild.remove();

  // 7) Recorrido
  console.log("Parent de #list:", list.parentNode.tagName);
  Array.from(list.children).forEach((li, i) => {
    console.log(`Item ${i}:`, li.textContent.trim());
  });

  // 8) DocumentFragment (100 items)
  const frag = document.createDocumentFragment();
  for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    li.className = "item";
    li.textContent = `Item #${i}`;
    frag.appendChild(li);
  }
  list.appendChild(frag);

  // 9) Ya estamos dentro de DOMContentLoaded
  console.log("DOM listo. Items totales:", list.children.length);
});
