// Pilar 1: Abstração

/*
    Modelo, Entidade, Identidade, Características e Ações.
*/

// Carro -> Modelo
class Carro {

    constructor() {
        // Características
        this.marca = 'Chevrolet',
        this.modelo = 'Impala',
        this.cor = 'Preto',
        this.placa = 'EMJ-2534'
    };

    // Métodos
    buzinar() {

    };
};

// Entidade
const carro1 = new Carro();
// Identidade
carro1.modelo = 'S10';
console.log(carro1.modelo);

const carro2 = new Carro();
carro2.modelo = 'Onix';
console.log(carro2.modelo);

// Loja virtual
class Produto {
    constructor() {
        // roupas
        this.tamanho = 'M',
        this.cor = 'azul',
        this.preco = 59.99,

        // eletrônicos
        this.altura = '50cm',
        this.largura = '40cm',
        this.peso = '4.5kg'
    }
}   