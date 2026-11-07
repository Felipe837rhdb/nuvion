# NuvionCloud — interface + Ubuntu/noVNC (protótipo)

Este pacote contém a tela inicial com o botão **ENTRAR NO PC** e uma configuração de desenvolvimento para testar Ubuntu XFCE + TigerVNC + noVNC em um Codespace.

## Importante antes de começar
- A tela HTML sozinha não executa Ubuntu. O Ubuntu precisa estar rodando em um ambiente remoto.
- GitHub Codespaces tem cota gratuita limitada, não é um servidor permanente e pode parar por inatividade.
- O Codespace deste exemplo é marcado como **private** na porta encaminhada. Não mude para public.
- A senha VNC padrão do exemplo é temporária e fraca. Troque-a antes de qualquer uso real.
- Não coloque senhas, tokens ou chaves secretas no HTML/JavaScript do site.
- Não use este protótipo para dados pessoais ou contas importantes. Ainda falta endurecimento de segurança e gerenciamento de sessões.

## 1. Criar o repositório pelo celular
1. Entre em https://github.com no navegador e faça login.
2. Toque em **New repository**.
3. Nome: `nuvioncloud`.
4. Escolha **Private** e crie o repositório.
5. Envie todos os arquivos deste ZIP mantendo as pastas `.devcontainer` e `scripts`.

## 2. Criar o Codespace
1. Abra o repositório.
2. Toque em **Code** > **Codespaces** > **Create codespace on main**.
3. Aguarde a criação do ambiente. O primeiro build pode demorar.
4. Quando o terminal estiver disponível, execute:
   `bash scripts/start-desktop.sh`
5. O script inicia XFCE, TigerVNC e noVNC. Se aparecer uma solicitação de senha, a senha temporária definida no script é `NuvionTmp42`.
6. Na aba **Ports**, procure a porta `6080`. Mantenha a visibilidade **Private** e abra o endereço encaminhado.
7. O endereço deve terminar em `/vnc.html`. Se abrir a página noVNC, tente conectar com a senha temporária.

## 3. Ligar o botão da página inicial
1. Copie a URL HTTPS encaminhada da porta 6080.
2. Abra `config.js` no editor do GitHub.
3. Cole a URL no campo `VNC_URL`, incluindo `/vnc.html?autoconnect=true&resize=scale`.
   Exemplo de formato:
   `VNC_URL: "https://NOME-DO-CODESPACE-6080.app.github.dev/vnc.html?autoconnect=true&resize=scale"`
4. Salve o arquivo.
5. Publique a pasta HTML em uma hospedagem estática HTTPS (por exemplo, GitHub Pages) ou abra `index.html` para testar localmente.
6. Toque em **ENTRAR NO PC**. O navegador será direcionado para o noVNC.

## 4. Limitações e próximos passos
- O Codespace pode parar quando fica ocioso e há limite de horas/armazenamento na cota gratuita.
- A URL encaminhada pode mudar se você recriar o Codespace.
- Para uma versão pública, cada usuário precisará de sessão isolada, autenticação, controle de acesso e senhas gerenciadas no servidor. Nunca exponha a porta VNC 5901 diretamente à internet.
- Não existe maneira confiável de oferecer um Ubuntu completo, permanente e gratuito apenas com HTML, Supabase ou GitHub Pages. O front-end pode ser gratuito; executar o computador remoto exige recursos de computação.
