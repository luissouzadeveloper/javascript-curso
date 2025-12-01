// Javascript é uma linguagem multiparadigma

// procedural
// function verificaQuartos(quartos, ocupados) {
//     let disponiveis = quartos - ocupados;
//     console.log(`Disponiveis: ${disponiveis} quartos`);
// }

// let quartos = 20;
// let ocupados = 5;

// verificaQuartos(quartos, ocupados);

// orientado a objetos
const hotel = {
    quartos: 20,
    ocupados: 5,

    verificaDispnibilidade() {
        let res = this.quartos - this.ocupados;
        console.log(`Disponíveis: ${res} quartos`);
    }
};

hotel.verificaDispnibilidade();