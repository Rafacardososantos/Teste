/*
    Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
    calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
    1 x N = N
    2 x N = 2N
    3 x N = 3N
*/
const prompt = require('prompt-sync')();

for(let i = 0; i <= 4; i++){
    let num = parseInt(prompt("Digite o número que você deseja que seja multiplicado: "));
    if(!isNaN(num)){
        for(let j = 1; j <= num; j++){
            console.log(`${j} X ${num} = ${num * j}`)
        }
    }else{
        console.log("Erro! É necessário informar um número inteiro para a multiplicação.")
    }
}