#!/usr/bin/env bash
set -euo pipefail

# Define uma senha VNC temporária. Para uso real, substitua por um segredo forte.
VNC_PASSWORD="${VNC_PASSWORD:-NuvionTmp42}"
mkdir -p "$HOME/.vnc"
chmod 700 "$HOME/.vnc"

# Gera arquivo de senha no formato usado pelo TigerVNC.
printf '%s\n%s\nn\n' "$VNC_PASSWORD" "$VNC_PASSWORD" | vncpasswd
chmod 600 "$HOME/.vnc/passwd"

# Encerra instâncias antigas, se houver.
vncserver -kill :1 >/dev/null 2>&1 || true

# Inicia o desktop XFCE na tela virtual :1 (porta VNC 5901).
vncserver :1 -geometry 1280x800 -depth 24 -localhost no

# Publica noVNC na porta 6080. A interface web fica em /vnc.html.
pkill -f 'websockify.*6080' >/dev/null 2>&1 || true
websockify --web=/usr/share/novnc/ 0.0.0.0:6080 localhost:5901
