/*
    25.Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
    de cada coluna separadamente.
*/
function gerarMatriz() {
    const linhas = 15;
    const colunas = 20;
    const matriz = [];

    for (let i = 0; i < linhas; i++) {
        const linha = [];
        for (let j = 0; j < colunas; j++) {
            let numeroReal = Math.floor((Math.random() * 100) - 50)//O "-50" serve para gerar números reais negativos
            linha.push(numeroReal);
        }
        matriz.push(linha);
    }
    return matriz;
}

const matrizReal = gerarMatriz();

const vetor = new Array(20).fill(0);
for(let i = 0; i < matrizReal.length; i++){
    for(let j = 0; j < matrizReal[i].length; j++){
        vetor[j] += matrizReal[i][j]
    }
}

function exibirMatriz(matriz) {
    for (const linha of matriz) {
        console.log(linha.join(' '));
    }
}

exibirMatriz(matrizReal);
console.log("A soma de cada coluna é: ", vetor);