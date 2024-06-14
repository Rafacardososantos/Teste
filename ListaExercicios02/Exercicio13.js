/*
    13.Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci.
*/
let arrayFibonnaci = [];
function fibonnaci(termos){
    let t1 = 1;
    let t2 = 1;
    arrayFibonnaci.push(t1,t2);

    for(let i = 2; i < termos; i++){
        let proximoTermo = t1 + t2;
        arrayFibonnaci.push(proximoTermo)
        t1 = t2;
        t2 = proximoTermo;
    }
}
fibonnaci(15)
console.log(arrayFibonnaci.join(", "))