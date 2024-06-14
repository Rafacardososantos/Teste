/*
    24.Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
    quantidade de elementos negativos da linha correspondente de M.
*/
const c = [];

const matriz = [
    [-27, 32, -1, -48, 15, -6, 10, 23,],
    [-2, 35, -12, 20, 0, 5, -9, -43,],
    [10, 11, -17, -7, -20, 21, 30, 49,],
    [16, 22, 7, 3, 36, 14, 50, 6,],
    [-49, -30, -4, 33, 18, -25, -45, 27,],
    [44, -22, 38, 29, -8, -32, -18, -24]
];

for(let i = 0; i < matriz.length; i++){
    let contador = 0;
    for(let j =0; j < matriz[i].length; j++){    
        if(matriz[i][j] < 0){
            contador++;
        }
    }
    c.push(contador);
}
console.log(c);