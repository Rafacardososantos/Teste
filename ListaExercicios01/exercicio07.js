/*
    As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.
*/
const prompt = require('prompt-sync')();

let numMacas = parseInt(prompt("Digite a quantidade de maçãs que você deseja comprar: "));
let soma = 0;

if(!isNaN(numMacas)){
    if(numMacas < 12){
            soma = numMacas * 0.30;
            console.log("O valor total de maçãs multiplicado por 0.30 é: ", soma);       
    }else{
        soma = numMacas * 0.25;
        console.log("O valor total de maçãs multiplicado por 0.25 é: ", soma);
    }
}else{
    console.log("Erro! É necessário informar uma quantidade inteira de maçãs.")
}
