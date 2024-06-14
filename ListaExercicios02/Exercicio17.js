/*
    17.Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
    dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
    os dados das pessoas menores de idade.
*/
const prompt = require('prompt-sync')();
const nomes = [];
const idades = [];
const menoresDeIdade = [];

for(let i = 0; i < 9; i++){
    let nome = prompt("Informe o nome: ");
    let idade = parseInt(prompt("Informe a idade: "));
    if(!isNaN(idade)){
        nomes.push(nome);
        idades.push(idade);
    }else{
        console.log("Erro! Informe um número válido para idade.")
    }
}

for(let i = 0; i < idades.length; i++){
    if(idades[i] < 18){
        menoresDeIdade.push({ nome: nomes[i], idade: idades[i] });
    }
}

console.log("Pessoas menores de idade:");
menoresDeIdade.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
});