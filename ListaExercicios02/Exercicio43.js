/*
    43.Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
    combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
    sobre as do obj1 em caso de conflitos.
*/
const obj1 = {
    nome: "Rafaella",
    idade: 20,
    cidade: "Santo Ângelo",
    email: "teste@teste.com"
};

const obj2 = {
    nome: "Rafaella",
    idade: 24,
    cidade: "Santo Ângelo",
    email: "teste@yahoo.com"
};

function combinarObjetos(obj1, obj2){
    return {
        ...obj1,
        ...obj2
    };
}

const obj3 = combinarObjetos(obj1, obj2);
console.log(obj3);