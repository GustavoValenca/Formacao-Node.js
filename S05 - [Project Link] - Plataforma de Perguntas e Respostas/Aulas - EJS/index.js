const express = require("express");
const app = express();

// Estou dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    // res.render("home");
    // res.render("principal/perfil");

    let nome = "Victor Lima";
    let lang = "JavaScript";
    let exibirMsg = false;

    let produtos = [
        {nome: "Doritos", preco: 10.40},
        {nome: "Leite", preco: 5},
        {nome: "coca cola", preco: 5}
    ]

    res.render("index", {
        nome,
        lang: lang,
        empresa: "Guia do Programador", 
        inscritos: 8040,
        msg: exibirMsg,
        produtos
    });
});

app.listen(8080, ()=>{
    console.log("App rodando!");
});