/*
    38.Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
    variável identificadora que calcule a operação conforme a informação contida nesta
    variável:
    1- soma dos elementos;
    2- produto dos elementos;
    3- média dos elementos;
    4- ordene os elementos em ordem crescente;
    5- mostre o vetor.
*/
const prompt = require('prompt-sync')();
let vetor = [];
let numero = 0;

for(let i = 0; i < 6; i++){
     numero = parseInt(prompt("Digite um número inteiro: "));
     while(!verificarNumero(numero)){
        numero = parseInt(prompt("Digite o número novamente: "));
     }
    vetor.push(numero)
}

console.log("Escolha uma das opções abaixo para os elementos informados anteriormente: ");
const escolha = parseInt(prompt("Digite 1 para somar todos os elementos\n"+ 
"Digite 2 para exibir o produto dos elementos\n" +
"Digite 3 para exibir a média dos elementos\n" + 
"Digite 4 para mostrar os elementos em ordem crescente\n"+
"Digite 5 para exibir os elementos\n"));

if(!isNaN(escolha)){
    switch(escolha){
        case 1:
            console.log('A soma de todos os elementos é: ',somarVetor(vetor));
        break;

        case 2:
            console.log('A multiplicação de todos os elementos é: ',multiplicarVetor(vetor));
        break;

        case 3:
            console.log('A média de todos os elementos é: ',mediaVetor(vetor));
        break;

        case 4:
            console.log('Os valores ordenados do vetor são: ', ordernarVetor(vetor))
        break;

        case 5:
            console.log('Os valores informados foram: ', vetor)
        break;

        default:
            console.log("Erro, digite um número entre 1 e 5!")
    }
}else{
    console.log("Erro! Informe um valor inteiro.")
}

function verificarNumero(numero){
    if(isNaN(numero)){
        return false;
    }else{
        return true;
    }
}

function somarVetor(array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}

function multiplicarVetor(array){
    let multiplicacao = 1;
    for(let i = 0; i < array.length; i++){
        multiplicacao *= array[i]
    }
    return multiplicacao;
}

function mediaVetor(array){
    let soma = 0;
    let media = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
    media = soma / 6;
    return media;
}

function ordernarVetor(array){
    array.sort((a, b) => a - b)
    return array;
}