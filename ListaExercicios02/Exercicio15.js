/**
    15.Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
    final, mostre quais são os números pares que foram digitados e em que posições eles
    estão armazenados.
 */
const prompt = require('prompt-sync')()
let arrayNumeros = [];
let arrayPar = [];
let posicao = 0;

for(let i = 1; i <= 10; i++){
    let numero = prompt(`Digite o ${i}º número: `);
    arrayNumeros.push(numero)
}

for(let par of arrayNumeros){
    if(par % 2 === 0){
        arrayPar.push({par, posicao});
    }
    posicao++;
}
console.log(arrayPar)