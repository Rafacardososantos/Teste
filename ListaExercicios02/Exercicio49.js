/*
    49.Você recebe um array de objetos representando transações financeiras. Cada
    transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
    onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
    essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/
let transacoesFinanceiras = [
    {id: 1, valor: 500, data: '01/01/2024', categoria: 'alimentacao'},
    {id: 2, valor: 80, data: "01/01/2024", categoria: "transporte"},
    {id: 3, valor: 100, data: "02/01/2024", categoria: "lazer"},
    {id: 4, valor: 150, data: "02/01/2024", categoria: "vestuario"},
    {id: 5, valor: 200, data: "03/01/2024", categoria: "alimentacao"},
    {id: 6, valor: 100, data: "04/01/2024", categoria: "transporte"},
    {id: 7, valor: 250, data: "05/01/2024", categoria: "lazer"}
];

function somarCategorias(transacoes){
    let resultado = {};

    for(let i = 0; i < transacoes.length; i++){
        let transacao = transacoes[i];
        let categoria = transacao.categoria;

        if(!resultado[categoria]){
            resultado[categoria] = [];
            resultado[categoria].subtotal = 0;
        }

        resultado[categoria].push(transacao);
        resultado[categoria].subtotal += transacao.valor;
    }
    return resultado;
}

const categoriasSomadas = somarCategorias(transacoesFinanceiras);
console.log(categoriasSomadas);