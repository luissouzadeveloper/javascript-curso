function acao() {
    document.cadastro.nome.value = 'Ana';
    document.cadastro.email.value = 'ana@gmail.com';
    document.cadastro.sexo.value = 'feminino';

    let nome = document.cadastro.nome.value;
    let email = document.cadastro.email.value;
    let sexo = document.cadastro.sexo.value;
    console.log(nome);
    console.log(email);
    console.log(sexo);

    const obj = document.getElementById('name');
    console.log(obj.value)
}

