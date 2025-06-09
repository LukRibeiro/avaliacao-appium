const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * subpágina contendo seletores específicos e métodos para uma página específica
 */
class SecurePage extends Page {
    /**
     * define seletores usando métodos getter
     */
    get flashAlert () {
        return $('#flash');
    }
}

module.exports = new SecurePage();
