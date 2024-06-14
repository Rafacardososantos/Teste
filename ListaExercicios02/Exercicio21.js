/*
    21.Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
    retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
    = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/
const prompt = require('prompt-sync')();

let altura = parseFloat(prompt("Informe a altura da pessoa: "));
let sexo = prompt("Digite o sexo da pessoa (F para feminino e M para masculino): ").toUpperCase();

function calcularPesoIdeal(alt, sexo){
        let pesoIdeal;
        if(sexo === 'M'){
            pesoIdeal = 72.7 * alt - 58;
        }else if(sexo === 'F'){
            pesoIdeal = 62.1 * alt - 44.7
        }
        return pesoIdeal.toFixed(2);
}

if(!isNaN(altura)){
    if(sexo !== 'M' && sexo !== 'F'){
        console.log("Erro! Informe informe o valor 'F' para feminino e 'M' para masculino.");
    }else{
        console.log("O peso ideal para a pessoa informada é: ", calcularPesoIdeal(altura, sexo));
    }
}else{
    return console.log("Erro! Informe um valor válido para a altura.");
}  