// Carregando lista de nomes
let nomes = [
    'joão',
    'maria',
    'carlos',
    'ana',
    'rafael',
    'leticia'
];

const loadNomes = () => {
    let total = nomes.length
    let lista = document.querySelector('.list-group');
    lista.innerHTML = '';

    if (!lista) {
        alert("Elemento '.list-group' não encontrado");
    }

    for(let i = 0; i < total; i++) {
        const novoItem = document.createElement('li');
        const textItem = document.createTextNode(nomes[i]);
        novoItem.appendChild(textItem);
        lista.appendChild(novoItem);
    }
    
}

const searchName = () => {

    const nomeProcurado = document.querySelector('#nome').value;
    let lista = document.querySelector('.list-group');
    lista.innerHTML = '';

    for(let i = 0; i < nomes.length; i++) {
        let nome = nomes[i]
        if (nomeProcurado === nome) {
            const novoItem = document.createElement('li');
            const textItem = document.createTextNode(nomes[i]);
            novoItem.appendChild(textItem);
            lista.appendChild(novoItem);
        } else {
            lista.innerHTML = `O nome ${nomeProcurado} não foi encontrado!`;
        }
    }
}
