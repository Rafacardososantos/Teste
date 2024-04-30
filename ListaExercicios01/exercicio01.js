/*
    Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
    valor correspondente em graus Fahrenheit.
*/
const prompt = require('prompt-sync')()

let valorFahrenheit;
let valorCelsius = parseInt(prompt ("Insira o valor do grau em Celsius para transformar para Fahrenheit: "));

valorFahrenheit = (valorCelsius * 9/5) + 32;

if(isNaN(valorFahrenheit)){
    console.log("Erro, informação inválida!");
}else{
    console.log(`O valor em Fahrenheit é: ${valorFahrenheit}°F`);
}

