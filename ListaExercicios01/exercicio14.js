/*
    Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.
*/
const prompt = require('prompt-sync')();
let num;
let contador = 0;
let soma = 0;

while(num !== 0){    
    num = parseFloat(prompt("Digite um número decimal: "));
    if(!isNaN(num)){ 
    if(num !== 0){
        soma += num;
        contador++
        }
    }else{
        console.log("Erro! Por favor insira um número decimal válido.")
    }
}
let media = soma / contador;
console.log(`A média dos valores decimais fornecidos é: ${media.toFixed(2)}`)