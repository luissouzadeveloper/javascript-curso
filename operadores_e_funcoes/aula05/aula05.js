// Funções

function desligarTorneira() {
    console.log('Desligar a torneira');
}
desligarTorneira();

function soma() {
    let n1 = 5;
    let n2 = 4;
    let soma = n1 + n2;
    console.log(soma);
}
soma();

function media(v1, v2) {
    let media = (v1 + v2) / 2;
    return `A média é ${media}`;
}

let retorno = media(8.3, 7.6);
console.log(retorno);

let retorno2 = media(5, 7.2);
console.log(retorno2);