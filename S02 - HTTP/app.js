const http = require("http");

http.createServer(function(requisicao, resposta){
    resposta.end("oi");
}).listen(8181);

console.log("Meu servidor está rodando!");