// Erros try/catch/throw

function quntdLetras(produto) {
    try {
        console.log(produto.nome.length);
    } catch(error) {
        console.log('Erro ao processar!');
    } /*finally {
        console.log('teste');
    }*/
};

const produto = {
    nome: 'Notebook',
    preco: 1200
};

quntdLetras(produto);