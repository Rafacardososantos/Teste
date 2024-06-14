/*
    42.Crie um objeto chamado dados que contém várias propriedades, incluindo números,
    strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
    propriedades que são arrays.
*/

const dados = {
    nome: 'Rafaella',
    idade: 24,
    altura: 1.67,
    telefones: ['99906339', '92086160', '99999999'],
    hobbies: ["ler", "viajar", "jogar"],
    amigos: ["João", "Ana", "Fulano"],
}

function quantidadeArrays(objeto) {
    const resultado = {};
    for (let chave in objeto) {
        if (Array.isArray(objeto[chave])) {
            resultado[chave] = objeto[chave];
        }
    }
    return resultado;
}

let contadorArray = quantidadeArrays(dados);
console.log("Os arrays existentes no objeto 'Dados' são: ",contadorArray);