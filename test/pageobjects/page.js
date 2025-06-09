const { browser } = require('@wdio/globals')

/**
* objeto da página principal contendo todos os métodos, seletores e funcionalidades
* que são compartilhados entre todos os objetos de página
*/
module.exports = class Page {
    /**
    * Abre uma subpágina da página
    * @param path caminho da subpágina (ex: /caminho/para/pagina.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
