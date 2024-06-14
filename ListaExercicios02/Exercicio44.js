/*
    44.Escreva uma função que conte quantas propriedades do tipo string existem em um
    objeto e retorne esse número.
*/

const pessoa = {
    nome: "Rafaella",
    idade: 24,
    cidade: "Santo Ângelo",
    email: "teste@yahoo.com"
};

function contarStrings(obj){
    let total = 0;
    for(let chave in obj){
        if(typeof obj[chave] === 'string'){
            total++;
        }
    }
    return total
}

let totalStrings = contarStrings(pessoa);
console.log(totalStrings);