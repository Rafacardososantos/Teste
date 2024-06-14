/*
    10.Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
    cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
    a) O somatório entre todos os valores;
    b) Qual foi o menor valor digitado;
    c) A média entre todos os valores;
    d) Quantos valores são pares.
*/
const prompt = require('prompt-sync')();
let array = [];
let continuar;
let somaTodosValores = 0;
let contador = 0;
let contadorPar = 0;

do{
    let numero = parseInt(prompt("Informe um número inteiro: "));
    if(!isNaN(numero)){
        somaTodosValores += numero;
        array.push(numero);
        if(numero % 2 === 0){
            contadorPar++;
        }
        contador++;
    }
    continuar = prompt("Deseja continuar? Digite S para sim e qualquer outra tecla para não: ").toUpperCase();
}while(continuar === 'S')

let media = somaTodosValores / contador;
console.log("A soma de todos o números informados é: ", somaTodosValores);
console.log("A média de todos os números informados é: ", media);
let menorNumero = Math.min(...array);
console.log("O menor número informado é: ", menorNumero)
console.log("A quantidade de números pares informada é: ", contadorPar)