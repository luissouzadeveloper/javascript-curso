// Estruturas condicionais - if e else

let idade = 10;

if (idade >= 18) {
    console.log('É de maior!');
} else {
    console.log('É de menor!');
}

if (idade < 16) {
    console.log('Ainda não poderá votar');
} else if (idade <= 17 || idade >= 70) {
    console.log('O voto é opcional');
} else {
    console.log('O voto é obrigatório');
}
