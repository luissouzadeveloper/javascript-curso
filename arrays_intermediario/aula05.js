// Filter arrays
const usuarios = [
    {nome: 'Ana', idade: 14},
    {nome: 'José', idade: 68},
    {nome: 'Maria', idade: 34},
];

let maiorIdade = usuarios.filter((item, i, arr) => {
    if(item.idade >= 18) {
        return true;
    } else {
        return false;
    }
});

console.log(maiorIdade);

const carros = [
    {nome: 'Gol', marca: 'volkswagem'},
    {nome: 'iX35', marca: 'hyundai'},
    {nome: 'Creta', marca: 'hyundai'},
    {nome: 'Fusca', marca: 'volkswagem'},
];

// O filter não altera o array original
const hyundaiMarca = carros.filter((item) => {
    if (item.marca === 'hyundai') return true;
});

console.log(hyundaiMarca);