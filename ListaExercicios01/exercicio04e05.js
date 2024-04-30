/*
    Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
    calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
    aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
    aprovação).
    Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
    média calculada seja menor que 6,0
*/
const prompt = require('prompt-sync')();

let nota1 = parseInt(prompt("Digite o primeiro número: "));
let nota2 = parseInt(prompt("Digite o segundo número: "));

if(!isNaN(nota1) && !isNaN(nota2) ){
    let media = (nota1 + nota2) / 2;
    if(media >= 6){
        console.log("Parabéns! Você foi aprovado e sua média é: ", media);
    }else{
        console.log("Você foi REPROVADO! Estude mais")
    }
}else{
    console.log("Erro! É necessário informar um número inteiro.")
}