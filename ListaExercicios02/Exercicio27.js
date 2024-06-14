/*
    27.Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
    multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
    um vetor V(36). Escrever o vetor V no final.
*/
const matriz = [
    [5, 3, 14, 1, 22, 8],
    [7, 13, 19, 6, 2, 17],
    [10, 5, 20, 11, 4, 7],
    [12, 9, 1, 15, 6, 8],
    [3, 16, 18, 4, 11, 9],
    [14, 2, 7, 10, 12, 5]
];

const vetor = [];
const numeroMultiplicador = 5;

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        vetor.push(matriz[i][j] * numeroMultiplicador); 
    }
}
console.log(vetor)