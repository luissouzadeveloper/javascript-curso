// Estrutura while

let i = 1;
while (i <= 10) {
    console.log(`Valor: ${i}`);
    i++;
}

// Exemplo
let postagens = [
    'Postagem 1',
    'Postagem 2',
    'Postagem 3',
    'Postagem 4',
    'Postagem 5',
];

let j = 0;
const totalPostagens = postagens.length
while (j < totalPostagens) {
    console.log(postagens[j]);
    j++;
}