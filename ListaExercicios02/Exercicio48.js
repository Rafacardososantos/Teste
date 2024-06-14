/*
    48.Você recebe dois objetos que representam o inventário de duas lojas diferentes:
    inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
    item em estoque. Escreva uma função que combine os inventários em um único objeto.
    Se um item aparecer em ambas as lojas, some as quantidades.
*/
const lojaA = {
    batedeira: 10,
    liquidificador: 13,
    geladeira: 7,
    cafeteira: 29,
    fogao: 3,
}

const lojaB = {
    liquidificador: 5,
    fogao: 8,
    televisao: 4,
    monitor: 12,
    batedeira: 2,
    notebook: 9
}

function somarItems(obj1, obj2){
    let soma = {};

    for(let chave in obj1){
        if(obj2.hasOwnProperty(chave)){
            soma[chave] = obj1[chave] + obj2[chave];
        }else{
            soma[chave] = obj1[chave];
        }
    }

    for(let chave in obj2){
        if(!obj1.hasOwnProperty(chave)){
            soma[chave] = obj2[chave];
        }  
    }
    return soma;
}

console.log(somarItems(lojaA, lojaB));