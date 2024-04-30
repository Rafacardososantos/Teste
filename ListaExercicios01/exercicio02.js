/*
    Escreva um algoritmo para ler o número de eleitores de um município, o número de
    votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
    em relação ao total de eleitores.
 */
const prompt = require('prompt-sync')();

let percenVotosBrancos;
let percenVotosNulos;
let percenVotosValidos
let totalValidos;

let totalVotos = parseInt (prompt("Digite a quantidade total de votos: "));
let totalBrancos = parseInt (prompt("Digite o total de votos brancos: "));
let totalNulos = parseInt (prompt("Digite o total de votos nulos: "));

if(!isNaN(totalVotos) && !isNaN(totalBrancos) && !isNaN(totalNulos)){
    if(totalBrancos < totalVotos && totalNulos < totalVotos){
        percenVotosBrancos = (totalVotos * totalBrancos) / 100;
        percenVotosNulos = (totalVotos * totalNulos) / 100;
        totalValidos = totalVotos - totalBrancos - totalNulos; //Essa linha faz o cálculo do número real de votos válidos
        percenVotosValidos = (totalValidos / totalVotos) * 100;
    }else{
        console.log("Erro! Quantidade de votos nulos/brancos informada é maior que a quantidade total")
    }
}else{
    console.log("Erro! É necessário informar um número inteiro.")
}
console.log(`O percentual de votos brancos é:  ${percenVotosBrancos}%`);
console.log(`O percentual de votos nulos é:  ${percenVotosNulos}%`);
console.log(`O percentual de votos válidos é:  ${percenVotosValidos}%`);