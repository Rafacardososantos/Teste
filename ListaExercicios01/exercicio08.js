/*
    Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente.
*/
const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));

if(!isNaN(num1) && !isNaN(num2)){
    if(num1 === num2){
        console.log("Erro, os números fornecidos não podem ser iguais!");
    }else if(num1 < num2){
        console.log(`A ordem crescente dos números é: ${num1} e ${num2}`);
    }else{
        console.log(`A ordem crescente dos números é: ${num2} e ${num1}`);
    }
}else{
    console.log("Erro! É necessário informar um número inteiro.")
}
