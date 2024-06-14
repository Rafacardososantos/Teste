/*
    37.Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
    o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
    respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
    aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
    e mostre uma mensagem de “REPROVADO”, caso contrário.
*/
const gabarito = ['C', 'A', 'B', 'D', 'E', 'A', 'C', 'B', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E']
function gerarCaractereAleatorio() {
    const caracteres = 'ABCDE'; 
    return caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}

function respostasAlunos(){
    let vetor= [];
    for(let i = 0; i < 20; i++){
        vetor.push(gerarCaractereAleatorio());
    }
    return vetor;
}

function compararArrays(gabarito, vetor){
    let acertos = 0;
    for(let i = 0; i < gabarito.length; i++){
        if(gabarito[i] === vetor[i]){
            acertos++
        }
    }
    return acertos;
}

for(let i = 1; i <= 50; i++){
    let respostas = respostasAlunos();
    let acertos = compararArrays(gabarito, respostas);

    if(acertos >= 12){
        console.log(`Aluno ${i}: aprovado com um total de ${acertos} acertos`);
    }else{
        console.log(`Aluno ${i}: REPROVADO com um total de ${acertos} acertos`);
    }
}