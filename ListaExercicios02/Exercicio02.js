/*
    2.Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
    h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
    multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require('prompt-sync')()

let velocidade = parseFloat(prompt("Informe a velocidade do carro: "));

if(velocidade > 80){
    let kmUltrapassados = velocidade - 80;
    let valorMulta = kmUltrapassados * 5;
    console.log(`O valor da multa é: ${valorMulta.toFixed(2)} reais`)
}else{
    console.log("Você não foi multado, pois não estava acima do limte de velocidade");
}