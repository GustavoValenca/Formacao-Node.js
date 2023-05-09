function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "victor", lang: "JS"},
                {name: "gustavo", lang: "C#"},
            ])
       }, 3000)   
    })
}

// let usuarios = pegarUsuarios();
// console.log(usuarios)

// pegarUsuarios().then((usuarios) => {
//     console.log(usuarios)
// })

// async function principal(){
//     let usuarios = await pegarUsuarios()
//     console.log(usuarios)
//     console.log("oi")
// }

// principal()

// Exercício

// src

function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("gustavo@gmail.com")
        }, 2000)
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let deuErro = true
            
            if (!deuErro){
                resolve({time: 6, to: "gustavo@gmail.com"})
            }
            else {
                reject("Fila cheia")
            }
        }, 4000)
    })
}

// console.log("Início")
// pegarId().then((id) => {
//     buscarEmailNoBanco(id).then((email) => {
//         enviarEmail("Oi", email).then(() => {
//             console.log("Email enviado para o usuario com id = " + id)
//         }).catch(erro => {
//             console.log("Erro: " + erro)
//         })
//     })
// })
// console.log("Fim")

// Hands-on

// async function principal(){
//     let id = await pegarId()
//     let email = await buscarEmailNoBanco(id)
//     enviarEmail("Oi", email).then(() => {
//         console.log("Enviado para id=" + id)
//     }).catch(erro => {
//         console.log(erro)
//     })
// }

// principal()

async function principal(){
    let id = await pegarId()
    let email = await buscarEmailNoBanco(id)
    try {
        await enviarEmail("Oi", email)
        console.log("Email enviado")
    }
    catch (erro){
        console.log(erro);
    }
}

principal()