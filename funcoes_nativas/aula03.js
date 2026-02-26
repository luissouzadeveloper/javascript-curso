// Manipulação de textos
let nome = 'Luis';

// length conta o número de caracteres
console.log(nome.length);

// charAt() captura a letra de acordo com o índice
console.log(nome.charAt(1));

// replace() substitui a palavra por outro
// Obs: não altera de fato a variável
let frase = 'moto do zé';
console.log(frase.replace('zé', 'joão'));
console.log(frase);

// subtr() pega o indice inicial e a qntd que quer
let frase2 = 'Daqui pra frente só pra tras';
console.log(frase2.substring(0, 8))

// split() transforma a string em array
console.log(frase.split(' '));

// slice() fatia a string
console.log(frase2.slice(0, 5));

// toLowerCase() transforma a string em minúscula
console.log(nome.toLocaleLowerCase());

// toUperCase() transforma a string em maiúscula
console.log(nome.toLocaleUpperCase());