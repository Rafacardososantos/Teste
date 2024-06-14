/*
    29.Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
    a) da linha 4 de M;
    b) da coluna 2 de M;
    c) da diagonal principal;
    d) todos os elementos da matriz M.
    Escrever essas somas e a matriz.
*/
function gerarMatrizAleatoria() {
    const rows = 5;
    const cols = 5;
    const maxValue = 100;
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix.push([]);
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = Math.floor(Math.random() * maxValue);
      }
    }
    return matrix;
}

const matriz = gerarMatrizAleatoria();

function somarDiagonalPrincipal(matriz){
    let soma = 0;

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(i === j){
                soma += matriz[i][j];
            }
        }
    }
    return soma;
}

function somarTodosElementos(matriz){
    let soma = 0;

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            soma += matriz[i][j];
        }
    }
    return soma;
}

function somarQuartaLinha(matriz){
    let somaLinha4 = 0;

    for(let i = 4; i <= 4; i++){
        for(let j = 0; j < 5; j++){
            somaLinha4 += matriz[i][j];
        }
    }
    return somaLinha4;
}

function somarSegundaColuna(matriz){
    let somaColuna2 = 0;

    for(let i = 0; i < 5; i++){
        for(let j = 2; j <= 2; j++){
            somaColuna2 += matriz[i][j];
        }
    }
    return somaColuna2;
}

function exibirMatriz(matriz){
    for(let linha of matriz){
        console.log(linha.join(" "));
    }
}

exibirMatriz(matriz);
const somaDiagonal = somarDiagonalPrincipal(matriz);
console.log("A soma dos elementos da diagonal principal é: ", somaDiagonal);
const todosElementos = somarTodosElementos(matriz);
console.log("A soma de todos os elementos da matriz é: ", todosElementos);
const somaQuatro = somarQuartaLinha(matriz);
console.log("A soma da linha com índice 4 da matriz é: ", somaQuatro);
const somaDois = somarSegundaColuna(matriz);
console.log("A soma da coluna com índice 2 da matriz é: ", somaDois);