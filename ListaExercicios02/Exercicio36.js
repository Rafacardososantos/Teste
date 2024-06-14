/*
    36.Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
    um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
    do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
    número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
    o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
    mensagem "Parabéns, tu foi o GANHADOR".
*/
let gabarito = [1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]
function gerarNumerosAleatorios() {
    let valorMaximo = 15;
    return Math.floor(Math.random() * valorMaximo) + 1;
}

function apostas(){
    let respostas = [];
        while(respostas.length < 13){
            let numeros = gerarNumerosAleatorios()
            if(!respostas.includes(numeros)){
                respostas.push(numeros);
            }            
        }
    return respostas.sort((a, b) => a - b);
}

function compararArrays(arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false;
    } 
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function contarAcertos (gabarito, respostas){
    let numeroAcertos = 0;
    respostas = respostas.sort((a, b) => a - b);
    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito.includes(respostas[i])) {
            numeroAcertos++;
        }
    }
    return numeroAcertos;
}

function verificarApostas(gabarito) {   
    for (let i = 1; i <= 100; i++) {
        let aposta = apostas();
        let acertos = contarAcertos(gabarito, aposta);
        if (acertos === 13) {
            console.log(`Apostador ${i}: Parabéns, tu foi o GANHADOR`);
        } else {
            console.log(`Apostador ${i} acertou apenas ${acertos}`);
            console.log(`Sequência de números apostados: ${aposta.join(", ")}`)
        }
    }
}

verificarApostas(gabarito);