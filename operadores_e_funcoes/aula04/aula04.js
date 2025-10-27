// Switch

let op = 4;

switch (op) {
    case 0:
        console.log('Domingo');
        break;
    
    case 1:
        console.log('Segunda');
        break;
    
    case 3:
        console.log('Terça');

    case 4:
        console.log('Quarta');
        break;

    case 5:
        console.log('Quinta');
        break;

    case 6:
        console.log('Sexta');
        break;

    case 7:
        console.log('Sábado');
        break;

    default:
        console.log('Inválido!');
        break;
}

// Operador ternário
let idade = 20;

let saida = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(saida);