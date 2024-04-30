/*
    Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
    Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/
let num = 100;
let contador = 0;

while(contador <= 49){
    let divisores = 0;
    let contDivisores =1;
    while(contDivisores <= num){
        if(num % contDivisores === 0){
            divisores++;
        }
        contDivisores ++
    }
    if(divisores === 2){
        console.log(num);
        contador++;
    }
    num++;
    console.log(contador)
}