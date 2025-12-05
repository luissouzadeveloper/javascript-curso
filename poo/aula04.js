// Métodos - parâmetros e retornos
class Usuario {
    constructor() {
        this.email = '';
        this.senha = '';
        this.subTotalCompra = 0;
    }

    logar() {
        let emailBD = this.email;
        let senhaBD = this.senha;

        if (senhaBD === '123') {
            return 'Senha válida!';
        } else {
            return 'Senha inválida!';
        }
    }

    calcularDesconto(cupom) {
        let desconto = 0;
        if (cupom === 'DESC20') {
            desconto = 20;
        } else if (cupom === 'FESTA10') {
            desconto = 10;
        }

        return this.subTotalCompra - desconto;
    }
}

const usuario = new Usuario();
usuario.email = 'lf@gmail.com';
usuario.senha = '123';
usuario.subTotalCompra = 600;

const retorno = usuario.logar();
console.log(retorno);

console.log(usuario.calcularDesconto("FESTA10"));