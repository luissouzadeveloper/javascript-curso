// Classes e objetos

// Notação literal
/*
const hotel = {
    quartos: 20,
    ocupados: 10,
    piscinas: 5,

    verificaDisponibilidade() {
        let res = this.quartos - this.ocupados;
        return `Disponível: ${res} quartos`;
    }
};

// hotel.piscinas = 6;
// delete hotel.piscinas;
// console.log(hotel.piscinas);

console.log(hotel.verificaDisponibilidade());
*/

// Notação de construtor
const hotel = new Object();
hotel.quartos = 20;
hotel.ocupados = 10;
hotel.verificaDisponibilidade = function() {
    let res = this.quartos - this.ocupados;
    return `Disponível: ${res} quartos`;
}

console.log(hotel.verificaDisponibilidade());

// Notação com classes
class Hotel {
    constructor() {
        this.quartos = 20;
        this.ocupados = 10;

    }

    verificaDisponibilidade() {
        let quartosLivres = this.quartos - this.ocupados;
        return `Quartos disponíveis: ${quartosLivres}`;
    }
};

const hotel2 = new Hotel(); // <- Crio um objeto
hotel2.verificaDisponibilidade();

