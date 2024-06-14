/*
    35.Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
    conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
    estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
    vetor pode ser preenchido quantas vezes forem necessárias.
*/
const prompt = require('prompt-sync')()

function verificarNumero(numero){
    if(isNaN(numero)){
        return false;
    }else{
        return true;
    }
}

let contador = 1;
let vetorPar = [];
let vetorImpar = [];

do{   
    let numero = parseInt(prompt(`Digite ${contador}º número inteiro: `));
    while(!verificarNumero(numero)){
        numero = parseInt(prompt("Digite o número novamente: "));
    }
    
    if(numero % 2 === 0){
        vetorPar.push(numero);
        if(vetorPar.length === 5){
            console.log("Vetor de números pares: ", vetorPar);
            vetorPar = [];
        }
    }else{
        vetorImpar.push(numero)
        if(vetorImpar.length === 5){
            console.log("Vetor de números ímpares: ", vetorImpar);
            vetorImpar = [];
        }
    }
    contador++
}while(contador <= 30)

if (vetorPar.length > 0) {
    console.log("Conteúdo final do vetor de números pares:", vetorPar);
}
if (vetorImpar.length > 0) {
    console.log("Conteúdo final do vetor de números ímpares:", vetorImpar);
}