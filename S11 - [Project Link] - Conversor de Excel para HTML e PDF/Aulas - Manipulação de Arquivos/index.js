const fs = require("fs");

let conteudo;

fs.readFile("./bluepen.txt", {encoding: 'utf-8'}, (erro, dados) => {
    if (erro){
        console.log("Ocorreu uma falha durante a leitrua do arquivo!");
    }
    else {
        conteudo = dados
        console.log(conteudo)
    }
})

fs.writeFile("./bluebird.txt", "飛翔(はばた)いたら \n戻らないと言って \n目指したのは \n蒼い 蒼い あの空", (err) => {
    if (err){
        console.log("Erro durante o salvamento");
    }
})

