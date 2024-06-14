/*
    18.Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
    um funcionário e ao final escreva o conteúdo do registro.
*/
const prompt = require('prompt-sync')()
const funcionario = {
    nome: "",
    cargo: "",
    salario: 0
};

funcionario.nome = prompt("Informe o nome do funcinário: ");
funcionario.cargo = prompt("Informe o cargo que o mesmo ocupa: ")
funcionario.salario = parseFloat(prompt("Informe o salário: "));

if(!isNaN(funcionario.salario)){
    console.log(`Funcionário ${funcionario.nome}, ocupa o cargo ${funcionario.cargo} e ganha R$${funcionario.salario} reais`);
}else{
    console.log("Erro! Informe um valor válido para o salário.")
}