class Dado {
    constructor(numFaces){
        this.numFaces = numFaces;
    }

    Rolar(){
        let randomNumber = Math.floor(Math.random() * this.numFaces + 1)
        console.log(randomNumber)
    }
}

let dadoNormal =  new Dado(6);
dadoNormal.Rolar();