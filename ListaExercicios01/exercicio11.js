/*
    Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
    cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
    ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
    NEGATIVO.
*/
const prompt = require('prompt-sync')();
let num;

do{ 
    num = parseInt(prompt("Digite um número, caso deseje parar a execução digite um valor negativo ou nulo: "));
     if(num >= 0){
        if(num % 2 === 0){
            console.log(`O número ${num} é par`)
        }else{
            console.log(`O número ${num} é ímpar`)
        }
     }    
}while(num >= 0 && num !== null)
console.log("Programa encerrado!")