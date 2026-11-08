
import { auth } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

const enterButton = document.getElementById("enterButton");
const status = document.getElementById("status");

let usuarioLogado = false;
let verificacaoConcluida = false;

onAuthStateChanged(auth, (user) => {
  usuarioLogado = !!user;
  verificacaoConcluida = true;

  status.textContent = usuarioLogado
    ? "Sua conta está conectada. Seu PC está pronto para acessar."
    : "Entre ou crie uma conta para acessar seu PC.";
});

enterButton.addEventListener("click", () => {
  if (!verificacaoConcluida) {
    status.textContent = "Verificando sua conta...";
    return;
  }

  if (usuarioLogado) {
    window.location.href = "pc.html";
  } else {
    window.location.href = "conta.html";
  }
});
