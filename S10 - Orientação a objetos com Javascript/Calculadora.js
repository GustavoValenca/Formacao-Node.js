class Calculadora {
    static Somar(a, b){
        console.log(a + b);
    }

    static Sub(a, b){
        console.log(a - b);
    }
}

// Static significa que posso usar sem instanciar

Calculadora.Somar(1, 3)