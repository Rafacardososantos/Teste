/*
    22.A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
    dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
    número não determinado de pessoas e retorne a média de salário da população, a
    média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
    350,00.
*/
const prompt = require('prompt-sync')();
const pessoas = [];

function cidadao(){
    let salario;
    let numFilhos
    let continuar;

    do{
        salario = parseFloat(prompt("Informe o salário do cidadão: "));
        numFilhos = parseInt(prompt("Informe o número de filhos do cidadão: "));
        if(!isNaN(salario) && !isNaN(numFilhos)){
            pessoas.push({ salario, numFilhos});
        }else{
            console.log("Erro! Informe números válidos para salário e número de filhos.")
        }
        continuar = prompt("Deseja continuar? Digite S para sim e qualquer outra tecla para não: ").toUpperCase();
    }while(continuar === 'S')    
    
    let totalPessoas = pessoas.length;
    if(totalPessoas === 0){
        return null;
    }

    let somaSalario = 0;
    let somaFilhos = 0;
    let maiorSalario = 0;
    let salarioMenor350 = 0;

    for(let chave of pessoas){
        somaSalario += chave.salario;
        somaFilhos += chave.numFilhos;
        if(chave.salario > maiorSalario){
            maiorSalario = chave.salario;
        }
        if(chave.salario <= 350){
            salarioMenor350++;
        }
    }
    let mediaSalario = somaSalario / totalPessoas;
    let mediaFilhos = somaFilhos / totalPessoas;
    let percentualSalario350 = (salarioMenor350 / totalPessoas) * 100;

    return{
        mediaSalario,
        mediaFilhos,
        percentualSalario350,
        maiorSalario
    };
}

const dados = cidadao();

if(dados){
    console.log("\n")
    console.log(`Média de salário: R$${dados.mediaSalario.toFixed(2)}`);
    console.log(`Média do número de filhos: ${dados.mediaFilhos.toFixed(2)}`);
    console.log(`Percentual de pessoa com salário de até R$350,00: ${dados.percentualSalario350.toFixed(2)}%`);
    console.log(`Maior salário: R$${dados.maiorSalario}`);
}else{
    console.log("Nenhuma informação foi inserida para computar os dados.");
}