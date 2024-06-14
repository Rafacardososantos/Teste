/*
    40.Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
    resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
    cada), representando as apostas feitas. Compare os números das apostas com o
    resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
    corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
    e quadras, apenas por quinas.)
*/
let gabarito = [1, 2, 7, 8, 10]
function gerarNumerosAleatorios() {
    let valorMaximo = 10;
    return Math.floor(Math.random() * valorMaximo) + 1;
}

function apostas(){
    let respostas = [];
        while(respostas.length < 5){
            let numeros = gerarNumerosAleatorios()
            if(!respostas.includes(numeros)){
                respostas.push(numeros);
            }            
        }
    return respostas.sort((a, b) => a - b);
}

function compararArrays(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    } 
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function verificarApostas(gabarito) {
    let gabaritoOrdenado = gabarito.slice().sort((a, b) => a - b);
    for (let i = 0; i < 50; i++) {
        let aposta = apostas();
        if (compararArrays(gabaritoOrdenado, aposta)) {
            console.log(`Aposta ${i + 1}: ${aposta.join(", ")} - Ganhador`);
        } else {
            console.log(`Aposta ${i + 1}: ${aposta.join(", ")} - Não Ganhador`);
        }
    }
}

verificarApostas(gabarito);