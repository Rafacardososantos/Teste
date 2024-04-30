/*
    Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
    formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
    Isósceles, escaleno ou eqüilátero.
*/
const prompt = require('prompt-sync')();

let lado1 = parseInt(prompt ("Insira o primeiro número: "));
let lado2 = parseInt(prompt ("Insira o segundo número: "));
let lado3 = parseInt(prompt ("Insira o terceiro número: "));

if(!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3)){
        if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
            if(lado1 === lado2 && lado2 === lado3 && lado3 === lado1){
                console.log("As medidas informadas formam um triângulo Equilátero!")
            }else if(lado1 === lado2 || lado2 === lado3 || lado3 === lado1){
                console.log("As medidas informadas formam um triângulo Isósceles!")
            }else{
                console.log("As medidas informadas formam um triângulo Escaleno!")
            }
        }else{
            console.log("As medidas informadas não formam nenhum triângulo")
        }
}else{
    console.log("Erro! É necessário informar um número inteiro.")
}