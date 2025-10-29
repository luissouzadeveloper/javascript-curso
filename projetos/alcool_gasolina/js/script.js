function calcularMelhorPreco() {
    let inputAlcool = document.querySelector('.alcool').value;
    let inputGasolina = document.querySelector('.gasolina').value;
    let resultado = document.querySelector('.res');

    if (inputAlcool === '' || inputGasolina === '') {
        alert('Por favor! Preencha todos os campos.');
        return;
    }

    // Cálculo
    let alcool = Number(inputAlcool);
    let gasolina = Number(inputGasolina);

    if (alcool / gasolina >= 0.7) {
        resultado.innerHTML = '<p>É melhor usar gasolina</p>';
    } else {
        resultado.innerHTML = '<p>É melhor usar álcool</p>';
    }
    
}

