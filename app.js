const button = document.getElementById("enterButton");
const statusText = document.getElementById("status");

button.addEventListener("click", () => {
  const url = (window.NUVION_CONFIG && window.NUVION_CONFIG.VNC_URL || "").trim();
  if (!url || url.includes("SEU-CODESPACE")) {
    statusText.textContent = "O Ubuntu ainda não está conectado. Primeiro inicie o ambiente remoto e configure VNC_URL em config.js.";
    statusText.style.color = "#fbbf24";
    return;
  }
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") throw new Error("URL inválida");
    window.location.href = parsed.href;
  } catch {
    statusText.textContent = "A URL do noVNC em config.js parece inválida. Confira o endereço e tente novamente.";
    statusText.style.color = "#fca5a5";
  }
});
