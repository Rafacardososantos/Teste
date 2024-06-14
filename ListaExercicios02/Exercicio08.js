/*
    8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
    podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
    sistema funciona assim:
    - até 10 h de atividade no mês: ganha 2 pontos por hora
    - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
    - acima de 20 h de atividade no mês: ganha 10 pontos por hora
    - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
    Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
    Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/
const prompt = require('prompt-sync')();

let horasDeAtividade = parseFloat(prompt("Informe quantas horas por mês você realiza atividades físicas: "));
let totalPontos = 0;
let valorTotal = 0;

if(!isNaN(horasDeAtividade)){
    if(horasDeAtividade <= 10){
        totalPontos = horasDeAtividade * 2;
    }else if(horasDeAtividade > 10 && horasDeAtividade <= 20){
        totalPontos = horasDeAtividade * 5;
    }else{
        totalPontos = horasDeAtividade * 10;
    }
        valorTotal = totalPontos * 0.05;
        console.log(`Você conseguiu um total de ${totalPontos} pontos e R$${valorTotal.toFixed(2)} em dinheiro`);
}else{
    console.log("Erro! Informe um valor válido!");
}
