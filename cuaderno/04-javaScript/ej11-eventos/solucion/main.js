// Ej11 — Eventos (solución)

// Helpers para $ y $$
const $ = (sel, scope = document) => scope.querySelector(sel);

// 1) Click: contador
{
  const btn = $("#btn-click");
  const out = $("#count");
  let count = 0;

  btn.addEventListener("click", () => {
    count++;
    out.textContent = count;
  });
}

// 2) Input en vivo
{
  const input = $("#name");
  const preview = $("#preview");
  input.addEventListener("input", (e) => {
    preview.textContent = e.target.value || "—";
  });
}

// 3) Submit con preventDefault
{
  const form = $("#demo-form");
  const email = $("#email");
  const msg = $("#form-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // no recargar
    if (!email.value.trim()) {
      msg.textContent = "⚠️ El email es obligatorio.";
      msg.style.color = "#b91c1c";
      email.focus();
      return;
    }
    msg.textContent = "✅ Formulario validado (simulado).";
    msg.style.color = "#16a34a";
  });
}

// 4) Teclado global + toggle
{
  const lastKey = $("#last-key");
  const toggleBtn = $("#toggle-keys");
  let listening = true;

  const onKey = (e) => {
    lastKey.textContent = e.key;
  };

  document.addEventListener("keydown", onKey);

  toggleBtn.addEventListener("click", () => {
    listening = !listening;
    if (listening) {
      document.addEventListener("keydown", onKey);
      toggleBtn.textContent = "Desactivar teclas";
    } else {
      document.removeEventListener("keydown", onKey);
      toggleBtn.textContent = "Activar teclas";
      lastKey.textContent = "—";
    }
  });
}

// 5) Delegación de eventos (clicks en lista)
{
  const list = $("#list");
  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".del");
    if (!btn) return;
    const li = btn.closest("li");
    if (li) li.remove();
  });
}

// 6) Listener { once: true }
{
  const btnOnce = $("#btn-once");
  btnOnce.addEventListener(
    "click",
    () => {
      alert("Este mensaje aparece solo una vez.");
    },
    { once: true }
  );
}

// 7) (Opcional) Propagación y stopPropagation
{
  const card = $("#bubble-card");
  const innerBtn = $("#inner-btn");

  card.addEventListener("click", () => {
    console.log("Click en la tarjeta (burbujeo).");
  });

  innerBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que suba a la tarjeta
    console.log("Click en el botón interior (no burbujea).");
  });
}
