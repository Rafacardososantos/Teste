/*
    31.Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
    Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
    todos os elementos de V diferentes de A. Mostre os resultados.
*/
function gerarMatrizAleatoria() {
    const rows = 30;
    const cols = 30;
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
const numAleatorio = Math.floor(Math.random() * 100);

function contarElementosIguais(matriz, numero){
    let contador = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(numero === matriz[i][j]){
                contador++;
            }
        }
    }
    return contador;
}

function montarMatrizX(matriz, numero){
    let matrizX = [];
    for(let i = 0; i < matriz.length; i++){
        let linha = [];
        for(let j = 0; j < matriz[i].length; j++){
            if(numero === matriz[i][j]){
                linha.push(null);
            }else{
                linha.push(matriz[i][j]);
            }
        }
        matrizX.push(linha)
    }
    return matrizX;
}
console.table(matriz);
let contagem = contarElementosIguais(matriz, numAleatorio);
console.log("O número escolhido é: ", numAleatorio)
console.log(`A quantidade de vezes que o número ${numAleatorio} aparece é: ${contagem}`);
const novaMatriz = montarMatrizX(matriz, numAleatorio);
console.table(novaMatriz)