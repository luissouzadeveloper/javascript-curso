// Funções construtoras - Encapsulamento
const Hotel = function() {
    this.nome = "Hotel 5 estrelas",
    this.quantidadeSuites = 30;
    let suitesOcupadas = 24

    this.reservar = function() {
        if(suitesOcupadas < this.quantidadeSuites) {
            suitesOcupadas++;
            console.log("Ocupados: " + suitesOcupadas);
        } else {
            console.log('Desculpe! Estamos lotados.');
        }
        
    }
}

const hotel = new Hotel();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();

