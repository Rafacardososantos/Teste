/*
    4.Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
    comprimentos e diga se é possível formar um triângulo com essas retas.
    Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
    lado deve ser menor que a soma dos outros dois.
*/
const prompt = require('prompt-sync')();

let seg1 = parseInt(prompt("Digite o valor do 1º segmento da reta: "));
let seg2 = parseInt(prompt("Digite o valor do 2º segmento da reta: "));
let seg3 = parseInt(prompt("Digite o valor do 3º segmento da reta: "));

if(!isNaN(seg1) && !isNaN(seg2) && !isNaN(seg3)){
    if(seg1 + seg2 > seg3 && seg1 + seg3 > seg2 && seg2+ seg3 > seg1){
        console.log("Com as medidas informadas é possível formar um triângulo!")
    }else{
        console.log("Com as medidas informadas não é possível formar um triângulo! ");
    }
}else{
    console.log("Erro! Informe um valor válido para os segmentos das retas.");
}