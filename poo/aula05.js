// Encapsulamento - parte 1
class Carro {
    constructor() {
        this.modelo = 'Gol',
        this.cor = 'Preto'
    };

    frear() {
        console.log('parando o carro!');
    }
};

const carro = new Carro();
carro.frear();

// Encapsulamento - parte 2
// Encapsulamento, Modificadores de acesso e getters e setters
class ContaBancaria {
    constructor() {
        /*
            _ (underline indica de forma estética que o atributo é privado).
        */
        this._numeroConta = 80,
        this._saldo = 0
    };

    get numeroConta() {
        return `Número: ${this._numeroConta}`;
    }

    set numeroConta(numero) {
        if (numero > 0) {
            this._numeroConta = numero;   
        }
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(novoSaldo) {
        if (novoSaldo > 0) {
            this._saldo = novoSaldo;
        }
    }

    sacar(valorSaque) {
        this._saldo -= valorSaque;
    }

    depositar(valorDeposito) {
        this._saldo += valorDeposito;
    }
};

const conta = new ContaBancaria();
conta.saldo = 1000;

const saque = conta.sacar(300)
console.log(saque);

console.log(conta.saldo);

const deposito = conta.depositar(800);
console.log(deposito);

console.log(conta.saldo);


// console.log(conta.numeroConta = 80);

// console.log(conta.numeroConta);
