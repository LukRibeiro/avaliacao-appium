const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * subpágina contendo seletores específicos e métodos para uma página específica
 */
class LoginPage extends Page {
    /**
     * define seletores usando métodos getter
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * um método para encapsular o código de automação para interagir com a página
     * por exemplo, para fazer login usando nome de usuário e senha
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * sobrescreve opções específicas para adaptá-las ao objeto da página
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
