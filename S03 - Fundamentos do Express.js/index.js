const express = require("express"); // Importando o express
const app = express(); // Instanciando o express

app.get("/", function (req, res) {
  res.send("<h1>Bienvenue</h1>");
  // Só se pode enviar uma resposta uma única vez, já que tudo que for escrito depois é ignorado
});

app.get("/blog/:artigo?", function (req, res) {  // "?" torna o parâmetro opcional
  const artigo = req.params.artigo;
  if (artigo) {
    res.send("Está aqui seu artigo");
  } else {
    res.send("Welcome to my blog");
  }
});

app.get("/canal/youtube", function (req, res) {
  const canal = req.query["canal"]; // não é o canal de /canal/youtube, mas sim o canal de /canal/youtube/?canal=gustavo, que é um parâmetro opcional
  if (canal) {
    res.send(canal);
  }
  res.send("Bem-vindo ao meu canal");
});

app.get("/ola/:nome/:empresa", function (req, res) {
  // REQ => DADOS ENVIADOS PELO USUÁRIO
  // RES => RESPOSTA QEU VAI SER ENVIADA PARA O USUÁRIO
  let empresa = req.params.empresa;
  res.send(`Oi ${req.params.nome} você é da ${empresa}?`);
});

app.listen(4001, function (e) {
  if (e) {
    console.log("Erro.");
  } else {
    console.log("Servidor inicializado.");
  }
});
