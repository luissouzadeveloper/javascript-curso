// Objetos literais
let nome = 'Notebook';
let preco = 4000;

const produto = {
    nome,
    preco,

    exibirProduto() {
        console.log(`O produto é um ${this.nome} e o preço é ${this.preco}`);
    }
};

produto.categoria = 'Eletrônicos';

produto.calcularDesconto = function(desc) {
    let desconto = preco - desc;
    return desconto;
    // console.log(`O desconto é de ${desconto}`);
}

console.log(produto.categoria);
produto.exibirProduto();
console.log(produto.calcularDesconto(40));