/*
    3.Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
    Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
    R$ 0.45 para viagens mais longas.
*/
const prompt = require('prompt-sync')();

let qtdeKmPercorrido = parseFloat(prompt("Digite a quantidade em KM que sua viagem terá: "));
let precoPassagem = 0;

if(!isNaN(qtdeKmPercorrido)){
    if(qtdeKmPercorrido <= 200){
        precoPassagem = qtdeKmPercorrido * 0.50;
    }else{
        precoPassagem = qtdeKmPercorrido * 0.45;
    }
    console.log(`O preço da passagem para uma viagem com essa quilometragem é: ${precoPassagem.toFixed(2)}`);
}else{
    console.log("Erro! Digite um valor válido para a quilometragem");
}