class Leitor {
    Ler(caminho){
        return "Conteúdo do arquivo!"
    }
}

class Escritor {
    Escrever(arquivo, conteúdo){
        console.log("Conteúdo escrito");
    }
}

class Criador {
    Criar(nome){
        console.log("Arquivo criado!");

    }
}

class CriadorDePDF {
    Criar(){
        console.log("Criando PDF...");
    }
}

class Destruidor {
    Deletar(nome){
        console.log("Deletando arquivo!");
    }
}

class ManipuladorDeArquivo {
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.Destruidor = new Destruidor();
    }
}

class GerenciadorDeUsuarios {
    constructor(){
        this.criador = new Criador();
        // Suponha que eu precise mudar a criação de lista em txt para pdf:
        this.criador = new CriadorDePDF();
        this. 
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuarios(lista){
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt", lista)
    }
}