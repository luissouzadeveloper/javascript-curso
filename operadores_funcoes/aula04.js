// Operador ternário e switch

// Switch
let dia = 5;

switch (dia) {
    case 0:
        console.log('Domingo');
        break;

    case 1:
        console.log('Segunda');
        break;

    case 2:
        console.log('Terça');
        break;

    case 3:
        console.log('Quarta');
        break;

    case 4:
        console.log('Quinta');
        break;

    case 5:
        console.log('Sexta');
        break;

    case 6:
        console.log('Sábado');
        break;

    default:
        console.log('Dia inválido!');
        break;
}

// Operador ternário
let idade = 20;

let resultado = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(resultado);