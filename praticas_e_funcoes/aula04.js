// Funções construtoras
const Hotel = function() {
    this.nome = "Hotel 5 estrelas",
    this.quantidadeSuites = 30,
    this.suitesOcupadas = 24,

    this.reservar = function() {
        this.suitesOcupadas++;
        console.log("Ocupados: " + this.suitesOcupadas);
    }
}

const hotel = new Hotel();
hotel.reservar();
hotel.reservar();
hotel.reservar();
