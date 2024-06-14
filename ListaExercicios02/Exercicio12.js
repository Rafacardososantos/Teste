/*
    12.Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
    Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
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
fibonnaci(10)
console.log(arrayFibonnaci.join(", "))