// alert('Olá, Mundo!');
let horas = new Date().getHours();
let msg;

if (horas < 12) {
    msg = 'Bom dia'
} else if (horas < 18) {
    msg = 'Boa tarde';
} else {
    msg = 'Boa noite';
}

console.log(msg);