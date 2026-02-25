// Funções de callback
function processar(callbackSucesso, callbackErro) {
    let resultadoProcesso = false;
    if (resultadoProcesso) {
        callbackSucesso();
    } else {
        callbackErro();
    }
}

const salvarResultado = function() {
    console.log('Salvar resultado');
}

const erro = function() {
    console.log('Erro!');
}

processar(salvarResultado, erro);