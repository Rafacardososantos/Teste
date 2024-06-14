/*
    28.Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
    item:
    a) a soma dos elementos acima da diagonal principal;
    b) a soma dos elementos abaixo da diagonal principal;
*/
const matriz = [
    [23, 54, 12, 89, 65, 76, 34, 45, 56, 67],
    [88, 44, 23, 12, 45, 67, 89, 90, 32, 21],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [11, 22, 33, 44, 55, 66, 77, 88, 99, 100],
    [15, 25, 35, 45, 55, 65, 75, 85, 95, 5],
    [60, 70, 80, 90, 10, 20, 30, 40, 50, 60],
    [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],
    [19, 29, 39, 49, 59, 69, 79, 89, 99, 9],
    [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
    [14, 24, 34, 44, 54, 64, 74, 84, 94, 4]
];

function somaAcimaDiagonal(matriz){
    const n = matriz.length;
    let soma = 0;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            soma += matriz[i][j];
        }
    }
    return soma;
}

function somaAbaixoDiagonal(matriz){
    let soma = 0;

    for(let i = 1; i < 10; i++){
        for(let j = 0; j < i; j++){
            soma += matriz[i][j]
        }
    }
    return soma;
}

const somaAcima = somaAcimaDiagonal(matriz)
console.log("A soma dos elementos acima da diagonal principal é: ", somaAcima);
const somaAbaixo = somaAbaixoDiagonal(matriz)
console.log("A soma dos elementos abaixo da diagonal principal é: ", somaAbaixo)