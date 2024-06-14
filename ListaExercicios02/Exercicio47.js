/*
    47.Crie uma função que transforme um objeto de entrada aplicando uma função
    fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
    resultados.
*/
const livros = {
    livro1: 'o Jardim dos Esquecidos',
    livro2: 'o Senhor dos Anéis',
    livro3: 'o Pequeno Príncipe',
    livro4: 'o Código Da Vinci'
};

function transformarMaiusculo(array){
    return array.replace('o', 'O', function(char) {
        return char.toUpperCase();
    });
}

function transformarObjeto(obj, fn) {
    let novoObjeto = {};
    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            novoObjeto[chave] = fn(obj[chave]);
        }
    }
    return novoObjeto;
}

const objTransformado = transformarObjeto(livros, transformarMaiusculo);
console.log(objTransformado)