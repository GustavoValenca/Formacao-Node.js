class Animal {
    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ChecarEstoque(){
        return 10;
    }

    MetodoQualquer(){
        console.log("Isso é um método qualquer")
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;
    }

    Latir(){
        console.log('ROLF! ROLF');
    }

    ChecarEstoque(){
        console.log("Na loja temos 20 cachorros.")
    }

    MetodoQualquer(){
        console.log("Aqui é a classe de cachorro")
        super.MetodoQualquer();
        console.log("Aqui vem outra funcionalidade")
    }
}

let dog = new Cachorro("Dogão", 5, 250, "Fila", 20);

console.log(dog.ChecarEstoque());
dog.Latir()
dog.ChecarEstoque()

let animal = new Animal()
animal.MetodoQualquer();
console.log("--------------------")
dog.MetodoQualquer();