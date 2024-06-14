/*
    11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência.
*/
const prompt = require('prompt-sync')();

let primeiroTermo = parseInt(prompt("Informe o primeiro termo da PA: "));
let razao = parseInt(prompt("Informe a razão da PA: "));
let array = [];
let soma = 0;

if(!isNaN(primeiroTermo) && !isNaN(razao)){
    for(let i = 1; i <= 10; i++){
        let termo = primeiroTermo + (i - 1) * razao;
        array.push(termo);
        soma += termo;
    }
    console.log("Os 10 primeiros termos da PA são: ", array.join(", "));
    console.log("A soma de todos os elementos da sequência são: ", soma);
}else{
    console.log("Erro! Informe valores válidos.")
}