// Array reduce
const numeros = [2,3,5];

/*const funcao = function(acumulador, atual, i) {
    console.log('índice: ' + i);
    console.log('acumulador: ' + acumulador);
    console.log('atual: ' + atual);
    console.log('---------------');
    return acumulador + atual;
};*/

/*const resultado = numeros.reduce(funcao);
console.log(resultado);*/

const produtos = [
    {nome: 'Notebook', promocao: true},
    {nome: 'Celular', promocao: false}
];

const ProdutosPromo = produtos.map(produto => produto.promocao);

const funcao = function(acumulador, atual) {
    return acumulador || atual
}
const novo = ProdutosPromo.reduce(funcao);
console.log(novo);