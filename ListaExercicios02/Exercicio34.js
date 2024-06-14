/*
    34.Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
    cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
    multiplicações.
*/
function gerarMatrizAleatoria() {
    const rows = 50;
    const cols = 50;
    const maxValue = 15;
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

function multiplicarMatriz(matriz){
    let novaMatriz = [];
    let elementoPrincipal;

    for(let i = 0; i < matriz.length; i++){
        let linha = [];
        elementoPrincipal = matriz[i][i]
        for(let j = 0; j < matriz[i].length; j++){
            matriz[i][j] *= elementoPrincipal;
            linha.push(matriz[i][j]);
        }
        novaMatriz.push(linha);
    }
    return novaMatriz;
}
console.log("Matriz original: ");
console.table(matriz);
const matrizMultiplicada = multiplicarMatriz(matriz);
console.log("Matriz Multiplicada: ");
console.table(matrizMultiplicada);