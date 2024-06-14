/*
    33.Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
    elementos da diagonal principal com a média dos elementos da diagonal secundária.
 */
const matriz = [
    [78, 12, 33],
    [96, 27, 55],
    [63, 48, 17]
];

function diagonalSecundaria(matriz){
    const n = matriz.length;
    let vetor = [];
    let soma = 0;
    let media;

    for(let i = 0; i < n; i++){
        vetor.push(matriz[i][n - i - 1]);
    }

    for(let x = 0; x < vetor.length; x++){
        soma += vetor[x];
    }
    media = soma / vetor.length;
    return media;
}

function diagonalPrincipal(matriz){
    let vetor = [];
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(i === j){
                vetor.push(matriz[i][j]);
            }
        }
    }
    return vetor;
}

let mediaDiagonalSecundaria = diagonalSecundaria(matriz);
console.log("A média da diagonal secundária é: ", mediaDiagonalSecundaria);
let elementosDiagonalPrincipal = diagonalPrincipal(matriz);
let vetorResultado = [];

for(let multiplicacao of elementosDiagonalPrincipal){
    vetorResultado.push(multiplicacao * mediaDiagonalSecundaria);
}
console.log("Números da diagonal principal: ", elementosDiagonalPrincipal);
console.log("O resultado da multiplicação é: ", vetorResultado);