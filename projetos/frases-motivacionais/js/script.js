let gerarFrase = () => {
    let res = document.querySelector('#resultado');

    let frases = [
        'Frase 1',
        'Frase 2',
        'Frase 3',
        'Frase 4',
        'Frase 5'
    ];

    let min = 0;
    let max = 4;
    let numAleatorio = Math.floor(Math.random() * 4);
    // let numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    let frase = frases[numAleatorio];

    res.innerHTML = frase;
}