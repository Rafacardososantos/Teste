/*
    30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
    contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
    e os vetores criados.
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

const matriz = gerarMatrizAleatoria()

console.table(matriz);
function somarTodasLinhas(matriz){
    let soma = 0;
    const vetor = [];

    for(let i = 0; i < 5; i++){    
        for(let j = 0; j < 5; j++){
            soma += matriz[i][j];
        }
        vetor.push(soma);
    }
    return vetor;
}

function somarTodasColunas(matriz){
    let vetor = new Array(5).fill(0);

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < matriz[i].length; j++){
            vetor[j] += matriz[i][j];
        }
    }
    return vetor;
}
const somaTodasLinhas = somarTodasLinhas(matriz);
console.log("A soma das 5 linhas é: ", somaTodasLinhas);
const somaTodasColunas = somarTodasColunas(matriz);
console.log("A soma das 5 colunas é: ",somaTodasColunas);