function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        // V1  

        // console.log(`
        //     Para: ${para}
        //     -------------------------------
        //     ${corpo}
        //     -------------------------------
        //     De: Growth
        // `)

        // callback("OK", 1, "8s");

        // V2

        // ... Lógica

        var deuErro = true;

        if (deuErro){
            callback("O envio de e-mail falhou!");
        }
        else {
            callback();
        }

    }, 8000);
}

// V1

// enviarEmail(`Ola, Gustavo
//             Seguem as últimas informações atualizadas do rastreamento de transporte do seu pedido:`, 
// "gustavo@gmail.com", (status, amount, time) => {
//     console.log(`
//         Status: ${status}
//         ----------------
//         Contatos: ${amount}
//         ----------------
//         Tempo de envio: ${time}
//     `);
// });

// console.log("Inicio do envio de email!")

// v2
enviarEmail(`Ola, Gustavo
            Seguem as últimas informações atualizadas do rastreamento de transporte do seu pedido:`,
"gustavo@gmail.com", (erro) => {  // O erro sempre é o último parametro, para que voce possa receber vários parametros
    if (erro == undefined){
        console.log("Tudo ok")
    }
    else {
        console.log("Ocorreu um erro: " + erro)
    }
})