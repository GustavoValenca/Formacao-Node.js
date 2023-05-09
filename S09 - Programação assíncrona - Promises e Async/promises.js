// V1

// function enviarEmail(corpo, para){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var deuErro = true;

//             if (!deuErro){
//                 resolve()
//             }
//             else {
//                 reject()
//             }
//         }, 4000)
//     })
// }

// enviarEmail("Olá", "gustavo@gmail.com").then(() => {
//     console.log("Promessa cumprida")
// }).catch(() => {
//     console.log("Promessa não cumprida!")
// })

// V2

// function enviarEmail(corpo, para){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var deuErro = false;

//             if (!deuErro){
//                 resolve({time: 5, to: "gustavo@gmail.com"})
//             }
//             else {
//                 reject("Fila cheia")
//             }
//         }, 4000)
//     })
// }

// enviarEmail("Olá", "gustavo@gmail.com").then(({time, to}) => {  // Atribuição por desestruturação
//     console.log("Promessa cumprida")
//     console.log(`
//         Time: ${time}
//         -------------------
//         To: ${to}
//     `)
// }).catch((erro) => {
//     console.log("Promessa não cumprida!")
//     console.log(erro)
// })

// V3

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
            let deuErro = false
            
            if (!deuErro){
                resolve({time: 6, to: "gustavo@gmail.com"})
            }
            else {
                reject("Fila cheia")
            }
        }, 4000)
    })
}

console.log("Início")
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail("Oi", email).then(() => {
            console.log("Email enviado para o usuario com id = " + id)
        }).catch(erro => {
            console.log("Erro: " + erro)
        })
    })
})
console.log("Fim")