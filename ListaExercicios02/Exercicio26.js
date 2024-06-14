/*
  26.Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].
 */
const matrizA = [
  [4, 7, 12, 9, 5],
  [8, 3, 15, 2, 11],
  [14, 6, 1, 10, 13]
];

const matrizB = [
  [8, 7, 4],
  [3, 10, 12],
  [5, 15, 1],
  [14, 6, 13],
  [11, 2, 9]
];

const matrizC = [];
for (let i = 0; i < 3; i++) {
      matrizC[i] = [];
    for (let j = 0; j < 3; j++) {
      matrizC[i][j] = 0;
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 5; k++) {
          matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
        }
    }
}

console.log("Matriz C:");
for (const linha of matrizC) {
    console.log(linha.join(' '));
}