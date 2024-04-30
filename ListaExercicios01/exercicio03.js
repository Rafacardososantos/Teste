/* 
    Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
    ● Some 25 ao primeiro inteiro;
    ● Triplique o valor do segundo inteiro;
    ● Modifique o valor do terceiro inteiro para 12% do valor original;
    ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
    dos primeiros três inteiros.
*/
const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));

if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
        let resultado1 = num1 + 25;
        let resultado2 = num2 * 3;
        let resultado3 = (num3 * 12) / 100;
        let resultado4 = num1 + num2 + num3;
        console.log(`O resultado de ${num1} + 25 é: ${resultado1}`);
        console.log(`O resultado de ${num2} multiplicado po 3 é: ${resultado2}`);
        console.log(`12% de ${num3} é: ${resultado3}`);
        console.log(`O resultado da soma do três números informados é: ${resultado4}`);
}else{
    console.log("Erro! É necessário informar um número inteiro.")
}