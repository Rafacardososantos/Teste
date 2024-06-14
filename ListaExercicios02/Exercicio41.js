/*
    41.Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
    idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
    nome e idade.
*/

const pessoa = {
    nome: "Rafaella",
    idade: 24
};
pessoa.email = "teste@teste.com";
console.log("Idade: ",pessoa.idade);
console.log("Objeto: ", pessoa);