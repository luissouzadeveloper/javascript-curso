// Array map
const pessoas = [
    'João',
    'Maria',
    'Carlos'
];

const novoArray = pessoas.map((item, i, arr) => {
    return `Olá ${item}`;
});

console.log(novoArray);

const produtosDolar = [
    {produto: 'Notebook', preco: 1200, moeda: '$'},
    {produto: 'Celular', preco: 800, moeda: '$'},
];

const dolarCotacao = 5.29

const produtosReal = produtosDolar.map((item) => {
    let produto = item.produto;
    let precoReal = item.preco * dolarCotacao;
    
    return `O produto é ${produto} e o valor em real é R$${precoReal.toFixed(2)}`
});

console.log(produtosReal);