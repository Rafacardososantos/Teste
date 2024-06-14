/*
    50.Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
    deverá ser capaz de interagir com o usuário através do console do navegador e manter
    um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
    informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
    1. Estrutura de Dados:
     Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
    cidade, quartos totais e quartos disponiveis.
     Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
    nomeCliente.
    2.Funcionalidades:
     Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
     Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
    disponíveis em uma cidade específica.
     Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
    deve diminuir o número de quartos disponiveis do hotel.
     Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
    aumentar o número de quartos disponiveis no hotel correspondente.
     Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
    cliente.
    3.Regras de Negócio:
     Um hotel só pode aceitar reservas se houver quartos disponíveis.
     As reservas devem ser identificadas por um ID único e associadas a um
    único hotel.

    4.Desafios Adicionais (Opcionais):
    ○ Implementar uma função de check-in e check-out que atualize a
    disponibilidade de quartos.
    ○ Gerar relatórios de ocupação para um hotel.
    ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
    avaliações dentro do objeto do hotel.
*/
const prompt = require('prompt-sync')();
let hoteis = [];
let reservas = [];
let opcao = 0;
let idHotel = 1;
let idReserva = 1;

do{
    console.log("-----------Escolha a opção desejada------------");
    let escolha = parseInt(prompt("Digite 1 para cadastrar um hotel\n"+ 
    "Digite 2 para buscar um hotel por cidade\n" +
    "Digite 3 para realizar uma reserva\n" + 
    "Digite 4 para cancelar uma reserva\n"+
    "Digite 5 para listar todas as reservas\n"));

    if(!isNaN(escolha)){
        switch(escolha){
            case 1:
                cadastrarHoteis();
                //console.log("Estado atual dos hotéis:", hoteis);
                break;

            case 2:
                buscarHoteisPorCidade();
                break;

            case 3:
                realizarReserva();
                break;

            case 4:
                cancelarReserva();
                break;

            case 5: 
                listarReservas();
                break;

            default:
                console.log("Erro! Informe um número de 1 a 5");
        }
    }else{
        console.log("Erro! Informe um valor válido.")
    }
    opcao = parseInt(prompt("Digite 0 para encerrar o programa, ou digite qualquer outra tecla para continuar: "));
}while(opcao !== 0)

function cadastrarHoteis(){
        let nomeHotel;
        let cidade;
        let quartosTotais;

        nomeHotel = prompt("Informe o nome do hotel: ");
        cidade = prompt("Informe a cidade em que o hotel se localiza: ");
        quartosTotais = parseInt(prompt("Informe a quantidade de quartos que o hotel possui: "));

        if(!isNaN(quartosTotais)){
            hoteis.push({
                id: idHotel++,
                nome: nomeHotel,
                cidade: cidade,
                quartosTotais: quartosTotais,
                quartosDisponiveis: quartosTotais
            });
        }else{
            console.log("Erro! Informe um número válido para a quantidade de quartos disponíveis.")
        }    
        return hoteis;
}

function buscarHoteisPorCidade(){
    let cidadeEscolhida = prompt("Informe em qual cidade você deseja procurar hotéis: ");

    function existeHotel(hotel){
        return hotel.cidade.toLowerCase() === cidadeEscolhida.toLowerCase();
    }

    let hoteisEncontrados = hoteis.filter(existeHotel);
    if(hoteisEncontrados.length > 0){
        console.log("Hotel/Hotéis encontrado(s): ", hoteisEncontrados);
    }else{
        console.log("Nenhum hotel cadastrado foi encontrado para a cidade informada!")
    }
    
}

function realizarReserva(){
    let idHotel = parseInt(prompt("Digite o ID do hotel para reserva: "));
    let cliente = prompt("Digite o nome do cliente: ");
    let hotel = hoteis.find(hotel => hotel.id === idHotel);

    if (hotel !== undefined && hotel.quartosDisponiveis > 0) {
        reservas.push({
            idReserva: idReserva++,
            idHotel: idHotel,
            nomeCliente: cliente
        });
        hotel.quartosDisponiveis--;
        console.log(`Reserva para "${cliente}" no hotel "${hotel.nome}" foi feita com sucesso!`);
    } else {
        console.log('Reserva não pode ser feita. Verifique se o hotel existe e tem quartos disponíveis.');
    }
}

function cancelarReserva() {
    let idReserva = parseInt(prompt("Digite o ID da reserva a ser cancelada: "));
    let reservaIndex = reservas.findIndex(reserva => reserva.idReserva === idReserva);

    if (reservaIndex !== -1) {
        let reserva = reservas[reservaIndex];
        let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);

        if (hotel !== undefined) {
            hotel.quartosDisponiveis++;
            reservas.splice(reservaIndex, 1);
            console.log(`Reserva de ID ${idReserva} foi cancelada com sucesso!`);
        }
    } else {
        console.log('Reserva não encontrada.');
    }
}

function listarReservas() {
    reservas.forEach(reserva => {
        let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        console.log(`Reserva ID: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`);
    });
}