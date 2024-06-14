/*
    16.Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
    (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
    depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/
let vetorNumeros = [];

for(let i = 1; i <= 10; i++){
    vetorNumeros.push(Math.floor(Math.random() * 99) + 1);
}
console.log("Vetor antes da ordenação: ",vetorNumeros.join(", "))
vetorNumeros.sort(function (a,b){
    if(a > b){
        return 1;
    }else if(a < b){
        return -1;
    }else{
        return 0;
    }
});
console.log("Vetor depois da ordenação:", vetorNumeros.join(", "))

