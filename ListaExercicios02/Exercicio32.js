/*
    32.Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
    cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
    matriz lida e a modificada.
*/
function gerarMatrizAleatoria() {
    const rows = 5;
    const cols = 6;
    const maxValue = 100;
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix.push([]);
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = Math.floor(Math.random() * maxValue) - 50;
      }
    }
    return matrix;
}
const matriz = gerarMatrizAleatoria();

function encontrarValorAbsoluto(linha) {
  let maiorModulo = Math.max(...linha.map(Math.abs));
  return maiorModulo;
}

function dividirLinhaPeloMaiorModulo(linha, maiorModulo) {
  const novaLinha = linha.map(function(elemento) {
      return parseFloat(elemento / maiorModulo).toFixed(2);
  });
  return novaLinha;
}

function dividirElementosMatriz(matriz){
    const novaMatriz = [];
    for(let i = 0; i < matriz.length; i++){
        let maiorModulo = encontrarValorAbsoluto(matriz[i]);
        let novaLinha = dividirLinhaPeloMaiorModulo(matriz[i], maiorModulo);
        novaMatriz.push(novaLinha);
    }
    return novaMatriz;
}
console.table(matriz);
const matrizModificada = dividirElementosMatriz(matriz);
console.table(matrizModificada);