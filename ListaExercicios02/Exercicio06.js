/*
    6.Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
    tentar descobrir qual foi o valor sorteado.
*/
const prompt = require('prompt-sync')();

function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 5) + 1; 
}

function jogarJogo(){
    let numAleatorio = gerarNumeroAleatorio();

    let meuPalpite = parseInt(prompt("Digite o número que você acha que é o número sorteado: "));

    if(meuPalpite >=1 && meuPalpite <=5 && !isNaN(meuPalpite)){
        if(meuPalpite === numAleatorio){
            console.log("Parabéns! Você acertou o número sorteado: ", numAleatorio);
        }else{
            console.log("Que pena! O número sorteado foi: ", numAleatorio);
        }
    }else{
        console.log("Por favor, insira um número válido e/ou um número entre 1 e 5;")
    }
}

jogarJogo();