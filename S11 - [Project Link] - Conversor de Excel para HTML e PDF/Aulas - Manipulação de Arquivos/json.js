const fs = require("fs");

fs.readFile("./usuario.json", {encoding: 'utf-8'}, (erro, dados) => {
    if (erro){
        console.log("Um erro aconteceu!");
    }
    else {
        let conteudo = JSON.parse(dados);  // Texto para objecto javascript (JSON)
        conteudo[0].categoria = "Back-end"

        fs.writeFile("./usuario_modified.json", JSON.stringify(conteudo), (erro) => {
            if (erro){
                console.log("Um erro aconteceu durante a escrita.")

            }
            else {
                console.log(conteudo)
            }
        })
        
    }
})