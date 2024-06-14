/*
    9.Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
    mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
    perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
    funcionário.
*/
const prompt = require('prompt-sync')();
let somaSalarioF = 0;
let somaSalarioM = 0;
let continuar;
do{
    let sexo = prompt("Digite o sexo do funcionário (F para feminino e M para masculino): ").toUpperCase();
    let salario = parseFloat(prompt("Informe o salário do funcionário: "));
    if(!isNaN(salario)){
        if(sexo === 'F'){
            somaSalarioF += salario;
        }else if(sexo === 'M'){
            somaSalarioM += salario;
        }else{
            console.log("Erro! Informe informe o valor 'F' para feminino e 'M' para masculino.");
        }
    }else{
        console.log("Informe um valor válido para o salário!")
    }
    continuar = prompt("Deseja continuar? Digite S para sim e qualquer outra tecla para não: ").toUpperCase();
}while(continuar === 'S' )

console.log(`\nO total pago às mulheres foi R$${somaSalarioF} e aos homens foi R$${somaSalarioM}`);