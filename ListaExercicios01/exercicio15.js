/*
    Fazer um algoritmos para receber um número decimal e o peso de cada número até
    que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
    respectivos.
*/
const prompt = require('prompt-sync')();
let num;
let peso;
let somaPeso = 0;
let soma = 0;

while (num !== 0 ){
    num = parseFloat(prompt("Digite um número decimal: "));      
    if(!isNaN(num) && num !== 0){
        peso = parseFloat(prompt("Digite o peso do número informado anteriormente: ")) 
        if(peso !== 0){
            soma += num * peso;
            somaPeso += peso;
        }else{
            console.log("Erro! O peso da média aritmética ponderada não pode ser 0.")
        }     
    }
}
let resultado = soma / somaPeso;
console.log(`O resultado da média ponderada é: ${resultado.toFixed(2)}`);
//OBS: para que o programa acima seja executado perfeitamente, 
//é necessário informar os números decimais com ponto e não com vírgula.