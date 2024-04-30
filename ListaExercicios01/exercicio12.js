/*
    Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
    divididos por 11, dão resto igual a 5.
*/
console.log("No intervalo de 1000 à 1999, os números que dividindo por 11, possuem o resto da divisão igual 5 são:");
for(let i = 1000; i <= 1999; i++){
    if(i % 11 === 5){
        console.log(i);
    }
}