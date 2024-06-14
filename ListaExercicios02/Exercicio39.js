/*
    39.Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
    vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/
let vetorA = [];
let vetorB = [];

for(let i = 0; i < 100; i++){
    let numero = Math.floor(Math.random() * 201) - 100;
    vetorA.push(numero)
}

for(let i = 0; i < vetorA.length; i++){
    if(vetorA[i] !== null && vetorA[i] > 0){
        vetorB.push(vetorA[i]);
    }
}
console.log("Array original:\n", vetorA);
console.log("Array sem valores nulos ou negativos:\n", vetorB);