/*
    1.Escreva um programa para calcular a redução do tempo de vida de um fumante.
    Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
    Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
    vida um fumante perderá e exiba o total em dias.
*/
const prompt = require('prompt-sync')()

let qtdcigarrosPorDia = parseInt(prompt("Informe a quantidade de cigarros consumidos por dia: "));
let qtdAnosFumando = parseInt(prompt("Informe há quantos anos você já fuma: "));

if(!isNaN(qtdcigarrosPorDia) && !isNaN(qtdAnosFumando)){
    let qtde_dias = qtdAnosFumando * 365; //Saber a quantidade real em dias desde que começou a fumar.
    let total_cigarros = qtde_dias * qtdcigarrosPorDia; //Verificar quantos cigarros foram fumados desde que começou a fumar.

    let minutos_perdidos = total_cigarros * 10;//Essa linha informa a quantidade em minutos que o fumante já perdeu de
    let qtdeDiasPerdidos = Math.floor(minutos_perdidos / (60 * 24));
    console.log(`O fumante perdeu o total de ${qtdeDiasPerdidos} dias de vida.`)
}else{
    console.log("Erro! Informe um número válido.")
}