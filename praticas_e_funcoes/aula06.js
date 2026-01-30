// Funções factory

const produto1 = {
    nome: 'Notebook',
    preco: 4000
};

const produto2 = {
    nome: 'Celular',
    preco: 2000
};

const produtoFactory = function(nome, preco) {
    return {
        nome,
        preco,
        recuperarAvaliacoes() {
            console.log(`Avaliações para ${this.nome}`);
        }
    }
}

const produto = produtoFactory('Notebook', 4000);
produto.recuperarAvaliacoes();