// Operadores relacionais

/*
    igual a (== ou ===)
    maior que (>)
    menor que (<)
    maior ou igual a (>=)
    menor ou igual a (<=)
    diferente de (!= ou !==)
*/

console.log(10 == '10');      // true (compara valor)
console.log(10 === '10');     // false (compara valor e tipo)
console.log(10 > 10); // false
console.log(10 < 10); // false
console.log(10 >= 10) // true
console.log(10 <= 10) // true
console.log(10 != 10) // false
console.log(10 !== 10) // false

const v1 = 7;
const v2 = 9;

console.log(v1 > v2);

// Verificando maioridade
let idade = 22;
let maioridade = idade >= 18; // true
console.log(maioridade);

// Compra acima de R$100
let valorMinimo = 20;
let compra = 80;
let res = compra > valorMinimo;
console.log(res);

// Operadores lógicos
/*
    And = &&
    Or = ||
    Not = !
*/

// and
let teste1 = 2 == 2 && 3 == 4; // false
console.log(teste1);

// or
let teste2 = 2 == 2 || 3 == 4; // true
console.log(teste2);

// not
let teste3 = !(2 === 2); // false
console.log(teste3);

let idade2 = 20;
let faixaEtaria = idade2 >= 18 && idade2 <= 40;
console.log(faixaEtaria);

let idade3 = 29;
let totalCompra = 200;
let teste4 = idade >= 40 || totalCompra >= 200;
console.log(teste4);