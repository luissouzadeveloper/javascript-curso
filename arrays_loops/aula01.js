// Arrays
let nomes = [
    'João',
    'José',
    'Maria',
    'Ana'
];

console.log(nomes);
console.log(nomes[2]);

nomes.push('Carlos');

console.log(nomes); // adiciona um item no fim do array

nomes[0] = 'teste';
console.log(nomes);

// remover elementos
delete nomes[2];
console.log(nomes);