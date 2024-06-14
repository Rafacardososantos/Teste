/*
    7.Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
    carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
    cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
    (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
    mostre o preço a ser pago de acordo com os dados a seguir:
    Carros populares
    - Até 100 Km percorridos: R$ 0,20 por Km
    - Acima de 100 Km percorridos: R$ 0,10 por Km
    Carros de luxo
    - Até 200 Km percorridos: R$ 0,30 por Km
    - Acima de 200 Km percorridos: R$ 0,25 por Km
*/
const prompt = require('prompt-sync')();

console.log("*********Escolha a opção********")

let tipoCarro = parseInt(prompt("Digite 1 para alugar um carro popular ou 2 para alugar um carro de luxo: "));
let diasUsado = parseInt(prompt("Informe quantos dias o carro ficará alugado: "));
let kmRodado = prompt("KM Rodados: ");
let somaValorKM = 0;
let valorTotalDias = 0;
let aluguelTotal = 0;

if(!isNaN(tipoCarro) && !isNaN(diasUsado) && !isNaN(kmRodado)){
    switch(tipoCarro){
        case 1:
            if(kmRodado <= 100){
                somaValorKM = kmRodado * 0.20;
            }else{
                somaValorKM = kmRodado * 0.10;
            }
            valorTotalDias = diasUsado * 90;
            aluguelTotal = valorTotalDias + somaValorKM;
            console.log(`O valor total do aluguel é: ${aluguelTotal} reais`)
        break;
        
        case 2:
            if(kmRodado <= 200){
                somaValorKM = kmRodado * 0.30;
            }else{
                somaValorKM = kmRodado * 0.25;
            }
            valorTotalDias = diasUsado * 150;
            aluguelTotal = valorTotalDias + somaValorKM;
            console.log(`O valor total do aluguel é: ${aluguelTotal} reais`);
        break;

        default:
            console.log("Por favor, digite um número no intervalo de 1 a 2.")
    }
}else{
    console.log("Erro! Digite valores válidos!");
}