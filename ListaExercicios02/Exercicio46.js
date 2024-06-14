/*
    46.Suponha que você tem um array de objetos onde cada objeto representa uma venda
    com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
    de vendas por vendedor.
*/

const vendas = [
    {vendedor: 'Rafaella', venda: 150},
    {vendedor: 'Maria', venda: 200},
    {vendedor: 'Pedro', venda: 150},
    {vendedor: 'Tiago', venda: 780},
    {vendedor: 'Pedro', venda: 200},
    {vendedor: 'Joana', venda: 500},
    {vendedor: 'Rafaella', venda: 360},
    {vendedor: 'Tiago', venda: 350}
]

function somarVendas(array){
    let soma = {};

    for(let chave of array){
        if(soma[chave.vendedor]){
            soma[chave.vendedor] += chave.venda;
        }else{
            soma[chave.vendedor] = chave.venda;
        }
    }
    return soma;
}

let somaTotal = somarVendas(vendas);
console.log(somaTotal);