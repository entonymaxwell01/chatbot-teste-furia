# Chatbot FURIA CS:GO

Este é um chatbot desenvolvido para o Telegram como parte de um teste técnico. O bot fornece informações sobre o time de CS:GO da FURIA, incluindo curiosidades, estatísticas e últimos jogos.

## Funcionalidades

- **/start**: Inicia o bot e exibe o menu de opções.
- **/curiosidades**: Retorna uma curiosidade sobre o time de CS:GO da FURIA.
- **/estatisticas**: Exibe estatísticas importantes do time.
- **/jogos**: Lista os últimos jogos do time de CS:GO da FURIA.
- **/sobre**: Informações gerais sobre o bot.
- **/sair**: Encerra a interação com o bot.

## Tecnologias Utilizadas

- **Node.js**
- **Telegram Bot API** (biblioteca `node-telegram-bot-api`)
- **Cohere AI** para geração de texto
- **dotenv** para gerenciamento de variáveis de ambiente

## Como Executar

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd teste-tecnico-chatbot-furia
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3.Configure as variáveis de ambiente no arquivo .env:

```.env
   TELEGRAM_TOKEN=seu_token_telegram
   COHERE_API_KEY=sua_chave_cohere
```

4. Execute o bot:

```bash
npm start
```

5.Inicie uma conversa com o bot no Telegram.

## Hospedagem

- Este bot está hospedado na plataforma **Render**, que permite a execução contínua de aplicações Node.js.
- Certifique-se de que as variáveis de ambiente necessárias (como `TELEGRAM_TOKEN` e `COHERE_API_KEY`) estão configuradas corretamente no painel de variáveis de ambiente da Render.

Para acessar o bot, basta iniciar uma conversa com ele no Telegram em "@teste_furioso_bot".

## Observações

- Este projeto foi desenvolvido para fins de teste técnico e utiliza respostas estáticas e/ou geradas pela API do Cohere.
- Certifique-se de que sua chave da API Cohere e o token do Telegram estão configurados corretamente.

## Autor

- Desenvolvido por Entony Maxwell.
