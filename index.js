//DEsenvolvido por Pedro Almeida em 02-08-22 

let DataEvento = new Date('Sep 12 2022'); // Data do evento
let DataAtual = new Date(); //Data atual    
let Idade = 19; //Idade do participante
var Participantes = ["Pedro", "Felipe", "Maria", "Lais"]; // Array com nome dos participantes
console.log("Seja bem vindo ao Sistema de Cadastro (Developed by Pedro Almeida)");
console.log("Hoje é dia : " + DataAtual); // Mostrar a data atual 

if (DataEvento < DataAtual) {
    console.log("Data não permitida");
    console.log("Selecione uma data posterior")
} else {
    console.log("A data do evento é " + DataEvento + " !");

    if (Idade <= 18) {
        console.log("Cadastro não permitido pela idade ! ");
    } else {
        console.log("Sua idade é " + Idade + ",você poderá participar do evento ! ");
        console.log("No momento os participantes são : " + Participantes);
        if (Participantes.length <= 100) {
            console.log("Evento foi cadastrado com sucesso")
            console.log("Ainda é possivel cadastrar mais participantes");
            Participantes.push("Joana"); // Adicionar mais participantes 
            console.log("Novo participante cadastrado")
            console.log("Agora estamos com os seguintes participantes : " + Participantes);
        } else {
            console.log("Infelizmente o limite de participantes foi excedido."); //Caso Participantes <= 100 
        }

    }
}

