// Arrays - métodos úteis

const estados = [
    'Tocantins',
    'Pará',
    'Maranhão',
    'Ceará',
    'Amazonas'
];

// método pop() -> remove o último
console.log(estados.pop());
console.log(estados);

// método shift(); -> remove o primeiro
estados.shift();
console.log(estados);

// método push() -> adiciona no final
estados.push('Mato Grosso');
console.log(estados);

// método unshift() -> adiciona no início
estados.unshift('Amapá');
console.log(estados);

// método splice()
const novo = estados.splice(0, 3);
console.log(estados);

const novo2 = estados.slice(0, 2);
console.log(estados);

// conversão de arrays em string e vice versa
const nomes = [
    'Maria',
    'Raimundo',
    'Zé'
];

let texto = nomes.join();
let textoArray = texto.split(',');
console.log(texto)
console.log(textoArray)