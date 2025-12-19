// Herança Poo

// A classe Animal é uma superclasse
class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor,
        this.tamanho = tamanho,
        this.peso = peso
    }

    correr() {
        console.log('Correr!');
    }

    dormir() {
        console.log('Dormir');
    }
}

// A classe Cao é uma subclasse
class Cao extends Animal {
    constructor(cor, tamanho, peso, tamanhOrelha) {
        super(cor, tamanho, peso);
        this.tamanhOrelha = tamanhOrelha
    }

    latir() {
        console.log('Latir');
    }
};

// A classe Passaro é uma subclasse
class Passaro extends Animal {
    voar() {
        console.log('Voar');
    }
};

// Instância
const cao = new Cao('preto', 50, 4, 3);
console.log(cao.cor)

const passaro = new Passaro();
// passaro.voar();
// passaro.dormir();

class Papagaio extends Passaro {
    constructor(cor, tamanho, peso, sabeFalar) {
        super(cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log('Falar');
    }
}

const papagaio = new Papagaio('verde', 15, 3, true);
console.log(papagaio.cor)
// papagaio.voar();

// const animal = new Animal("Vermelho", 60, 7);
// console.log(animal.peso);