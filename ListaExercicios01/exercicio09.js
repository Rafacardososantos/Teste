/*
    Escreva um algoritmo que leia o código de origem de um produto e imprima a região
    do mesmo, conforme a tabela abaixo:
    1 - Sul         5 ou 6 - Nordeste
    2 - Norte       7, 8 ou 9 - Sudeste
    3 - Leste       10 até 20 - Centro-Oeste
    4 - Oeste       25 até 50 - Nordeste
    Fora dos Intervalos - Produto Importado
*/
const prompt = require('prompt-sync')();

let codigo = parseInt(prompt("Digite o código de origem do seu produto: "));

if(!isNaN(codigo)){
    switch(codigo){
        case 1: 
            console.log("O produto escolhido tem por origem a região Sul");
            break;
    
        case 2: 
            console.log("O produto escolhido tem por origem a região Norte");
            break;
    
        case 3: 
            console.log("O produto escolhido tem por origem a região Leste");
            break;
    
        case 4: 
            console.log("O produto escolhido tem por origem a região Oeste");
            break;
    
        case 5: case 6:
            console.log(`O produto escolhido tem por origem a região Nordeste`);
            break;
    
        case 7: case 8: case 9:
            console.log(`O produto escolhido tem por origem a região Sudeste`);
            break;
    
        default:
            if(codigo >= 10 && codigo <= 20){
                console.log(`O produto escolhido tem por origem a região Centro-Oeste`);
            }else if(codigo >= 25 && codigo <= 50){
                console.log(`O produto escolhido tem por origem a região Nordeste`);
            }else{
                console.log(`O seu produto é importado!`)
            }
    }
}else{
    console.log("Erro! É necessário informar um número inteiro para o código do produto ser identificado.")
}