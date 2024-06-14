/*
    19.Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
    repetição. Escrever cada um deles no formato HH.MM.SS.
*/
const prompt = require('prompt-sync')();
function validarTempo(horas, minutos, segundos){
    if (horas < 0 || horas >= 24 || minutos < 0 || minutos >= 60 || segundos < 0 || segundos >= 60
        || isNaN(horas) || isNaN(minutos) || isNaN(segundos)) {
        console.log("Erro! Horário inválido.");
        return false;
    }
    return true;
}

const arrayHoras = [];
for(let i = 1; i <= 5; i++){
    let hora = parseInt(prompt(`Digite o ${i}º horário: `));
    let minuto = parseInt(prompt(`Digite o ${i} minuto: `));
    let segundo = parseInt(prompt(`Digite o ${i} segundo: `));
        while(!validarTempo(hora, minuto, segundo)){ //Esse while fica em loop, até a condição da função ser satifeita
            hora = parseInt(prompt("Digite novamente o horário: "));
            minuto = parseInt(prompt("Digite novamente os minutos: "));
            segundo = parseInt(prompt("Digite novamente os segundos: "));
        }
        arrayHoras.push(`${hora < 10 ? '0' : ''}${hora}.${minuto < 10 ? '0' : ''}${minuto}.${segundo < 10 ? '0' : ''}${segundo}`);
}
arrayHoras.forEach(horarios => {
    console.log(horarios)
});