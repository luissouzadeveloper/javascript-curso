// Parâmetros e retornos
/*function somar(numero1, numero2) {
    numero1 = isNaN(numero1) ? 0 : numero1;
    numero2 = isNaN(numero2) ? 0 : numero2;
    return numero1 + numero2;
}*/

function somar(numero1=0, numero2=0) {
    return numero1 + numero2;
}

console.log(somar(2));
console.log(isNaN('oi'));

// NaN -> significa que não é um número

// Parâmetros e retornos opcionais
function calcularSalario(salario, desconto) {
    desconto = isNaN(desconto) ? 0 : desconto;
    return salario - desconto;
}

let novoSalario = calcularSalario(1621, 350);
console.log(novoSalario);