/*
    45.Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
    o número de vezes que a string aparece no array.
*/

const arrayCarros = ['Opala','Camaro SS', 'Dodge Charger', 'Mustang 69', 'Opala','Nissan Skyline', 'Dodge Charger'];

function contarStrings(array) {
    let contador = {};
    for (let str of array) {
        if (contador[str]) {
            contador[str]++;
        } else {
            contador[str] = 1;
        }
    }
    return contador;
}

let resultado = contarStrings(arrayCarros);
console.log(resultado);