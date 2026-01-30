async function loadComponent(id, file) {
  const el = document.getElementById(id);
  const res = await fetch(file);
  el.innerHTML = await res.text();
}

async function loadPage(page) {
  const res = await fetch(`pages/${page}.html`);
  document.getElementById("content").innerHTML = await res.text();
  // Atualizar botão ativo na navegação
  updateActiveNav(page);
}

function updateActiveNav(page) {
  // Remove classe 'active' de todos os botões
  const navButtons = document.querySelectorAll('.nav button');
  navButtons.forEach(btn => btn.classList.remove('active'));
  // Adiciona classe 'active' no botão correspondente à página atual
  const activeButton = document.querySelector(`.nav button[onclick*="${page}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

function copyPrompt() {
  const promptText = document.getElementById("promptText").innerText;
  navigator.clipboard.writeText(promptText);
  const btn = document.querySelector(".btn-copy-modern");
  if (!btn) return;
  const originalHTML = btn.innerHTML;
  btn.innerHTML = "✅ Copiado";
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.disabled = false;
  }, 1500);
}

window.onload = async () => {
  await loadComponent("header", "components/header.html");
  await loadComponent("nav", "components/nav.html");
  await loadComponent("footer", "components/footer.html");
  await loadPage("home");
};