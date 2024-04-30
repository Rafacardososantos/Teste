/* 
    Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/
const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número inteiro: "));

if(!isNaN(num)){
    for(let i = 1; i <= 10; i++){
        console.log(`${i} - ${num}`);
        }    
}else{
    console.log("Erro! É necessário informar um número inteiro.")
}