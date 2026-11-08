
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

const enterButton = document.getElementById("enterButton");
const status = document.getElementById("status");

let usuarioLogado = false;
let verificacaoConcluida = false;

onAuthStateChanged(auth, (user) => {
  usuarioLogado = !!user;
  verificacaoConcluida = true;

  status.textContent = usuarioLogado
    ? "Você está conectado à sua conta."
    : "Entre ou crie uma conta para acessar seu PC.";
});

enterButton.addEventListener("click", () => {
  if (!verificacaoConcluida) {
    status.textContent = "Verificando sua conta...";
    return;
  }

  if (usuarioLogado) {
    status.textContent = "Preparando seu computador...";
    // O acesso ao Ubuntu será conectado nesta etapa futura.
    window.location.href = "conta.html?logado=true";
  } else {
    window.location.href = "conta.html";
  }
});
