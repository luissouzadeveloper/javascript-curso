// if e else 

let idade = 18;
if (idade >= 18) {
    console.log('Maior de idade!');
}

if (idade >= 18 && idade <= 45) {
    console.log('Idade de 18 à 45');
}

let compra = 300;
if (idade >= 40 || compra >= 200) {
    console.log('Você tem um desconto de 20%');
} else {
    console.log('Você não tem acesso ao desconto de 20%');
}

let opc = 2;

if (opc === 1) {
    console.log('Saldo conta');
} else if (opc === 2) {
    console.log('Saldo poupança');
} else {
    console.log('Opção inválida');
}