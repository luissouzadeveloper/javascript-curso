// Funções nativas - datas
const data = new Date();

// Pega a data completa
// console.log(data.toString());

/*
// pega o dia
let dia = data.getDate();
// pega o mês
let mes = data.getMonth() + 1;
// pega o ano
let ano = data.getFullYear();
*/

//console.log(`Data: ${dia}-${mes}-${ano}`);

// pegar o horário
let horas = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();

console.log(`${horas}:${minutos}:${segundos}`);

// Operaçõe com datas
data.setDate(data.getDate() + 30);
// pega o dia
let dia = data.getDate();
// pega o mês
let mes = data.getMonth() + 1;
// pega o ano
let ano = data.getFullYear();
console.log(`Data: ${dia}-${mes}-${ano}`);