const button = document.getElementById("enterButton");
const statusText = document.getElementById("status");

button.addEventListener("click", () => {
  const url = (window.NUVION_CONFIG?.VNC_URL || "").trim();

  if (!url) {
    statusText.textContent = "Ubuntu ainda não está conectado.";
    statusText.style.color = "#fbbf24";
    return;
  }

  try {
    const parsed = new URL(url);

    if (parsed.protocol !== "https:") {
      throw new Error("URL inválida");
    }

    window.location.href = parsed.href;
  } catch {
    statusText.textContent = "A URL do noVNC parece inválida.";
    statusText.style.color = "#fca5a5";
  }
});
