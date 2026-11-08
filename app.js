
const enterButton = document.getElementById("enterButton");
const status = document.getElementById("status");

enterButton.addEventListener("click", () => {
  status.textContent = "Abrindo sua conta...";
  window.location.href = "conta.html";
});
