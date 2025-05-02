require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const http = require("http");
const { CohereClient } = require("cohere-ai");
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  const menu = {
    reply_markup: {
      keyboard: [
        ["/curiosidades", "/estatisticas"],
        ["/sobre", "/jogos"],
        ["/sair"],
      ],
      resize_keyboard: true,
      one_time_keyboard: false,
    },
  };

  bot.sendMessage(chatId, "Olá! Eu sou seu bot de teste técnico da fúria 🚀");
  bot.sendMessage(chatId, "Escolha uma opção:", menu);
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  switch (text) {
    case "/curiosidades":
      bot.sendMessage(
        chatId,
        "Buscando uma curiosidade sobre a FURIA CS:GO..."
      );

      const promptCuriosidades =
        "Me diga uma curiosidade interessante sobre o time de CS:GO da FURIA.";

      try {
        const response = await cohere.generate({
          model: "command",
          prompt: promptCuriosidades,
          maxTokens: 200,
          temperature: 0.5,
          stopSequences: ["\n", "."],
        });

        const resposta =
          response.generations[0].text || "Não consegui gerar uma resposta.";
        bot.sendMessage(chatId, resposta);
      } catch (err) {
        console.error("Erro ao consultar Cohere:", err.message);
        bot.sendMessage(
          chatId,
          "Desculpe, não consegui buscar a curiosidade agora."
        );
      }
      break;

    case "/estatisticas":
      bot.sendMessage(
        chatId,
        "Buscando as estatisticas sobre a FURIA CS:GO..."
      );

      const promptEstatisticas =
        "Me diga algumas estatísticas importantes do time de CS:GO da FURIA.";

      try {
        const response = await cohere.generate({
          model: "command",
          prompt: promptEstatisticas,
          maxTokens: 200,
          temperature: 0.5,
          stopSequences: ["\n", "."],
        });

        const resposta =
          response.generations[0].text || "Não consegui gerar uma resposta.";
        bot.sendMessage(chatId, resposta);
      } catch (err) {
        console.error("Erro ao consultar Cohere:", err.message);
        bot.sendMessage(
          chatId,
          "Desculpe, não consegui buscar as estatisticas agora."
        );
      }
      break;

    case "/sobre":
      bot.sendMessage(chatId, "Buscando informações sobre a FURIA ");

      const promptSobre =
        "Me diga alguns fatos sobre a equipe de CS:GO da Furia GAMING.";

      try {
        const response = await cohere.generate({
          model: "command",
          prompt: promptSobre,
          maxTokens: 200,
          temperature: 0.5,
          stopSequences: ["\n", "."],
        });

        const resposta =
          response.generations[0].text || "Não consegui gerar uma resposta.";
        bot.sendMessage(chatId, resposta);
      } catch (err) {
        console.error("Erro ao consultar Cohere:", err.message);
        bot.sendMessage(
          chatId,
          "Desculpe, não consegui buscar informações sobre a FURIA agora."
        );
      }
      break;

    case "/jogos":
      bot.sendMessage(chatId, "Buscando os últimos jogos da FURIA CS:GO...");

      const jogos = `
        Últimos jogos da FURIA CS:GO:
        1. FURIA 16 x 12 Team Liquid (IEM Dallas 2025)
        2. FURIA 14 x 16 G2 Esports (BLAST Premier Spring 2025)
        3. FURIA 2 x 0 Cloud9 (ESL Pro League 2025)
        4. FURIA 1 x 2 Heroic (IEM Katowice 2025)
        5. FURIA 16 x 8 MIBR (RMR Americas 2025)
          `;

      bot.sendMessage(chatId, jogos);
      break;

    case "/sair":
      bot.sendMessage(chatId, "Conversa encerrada. Obrigado por usar o bot!", {
        reply_markup: {
          remove_keyboard: true,
        },
      });
      break;

    default:
      if (!text.startsWith("/start")) {
        bot.sendMessage(chatId, "Por favor, escolha uma opção do menu.");
      }
  }
});

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bot está rodando\n");
  })
  .listen(process.env.PORT || 3000);
