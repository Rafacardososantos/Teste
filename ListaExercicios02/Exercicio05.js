/*
    5.Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/
const prompt = require('prompt-sync')();

function escolhaDoComputador(){
    let numeroAleatorio = Math.floor(Math.random() * 3);

    if(numeroAleatorio === 0){
        return 'pedra';
    }else if(numeroAleatorio === 1){
        return 'papel';
    }else{
        return 'tesoura';
    }
}

let escolhaJogador = prompt("Escolha pedra, papel ou tesoura: ").toLowerCase();
let opcoes = ['pedra', 'papel', 'tesoura'];

if(opcoes.includes(escolhaJogador)){
    let opcaoComputador = escolhaDoComputador()
    console.log(`O jogador escolheu ${escolhaJogador}`);
    console.log(`O computador escolheu ${opcaoComputador}`)

    if(escolhaJogador === opcaoComputador){
        console.log("Empate!")
    }else if(
        escolhaJogador === 'pedra' && opcaoComputador === 'tesoura' ||
        escolhaJogador === 'tesoura' && opcaoComputador === 'papel' ||
        escolhaJogador === 'papel' && opcaoComputador === 'pedra'
    ){
        console.log("O vencedor é o jogador");
    }else{
        console.log("O vencedor é o computador");
    }
}else{
    console.log("Erro! Digite pedra, papel ou tesoura");
}