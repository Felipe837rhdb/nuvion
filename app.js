const enterButton = document.getElementById("enterButton");
const status = document.getElementById("status");

enterButton.addEventListener("click", () => {
  status.textContent = "Conectando ao seu computador...";
  window.location.href =
    "https://animated-tribble-v6px9prpg9wxfxrqx-6080.app.github.dev/vnc.html?autoconnect=true";
});