

# Avaliação Prática – Teste Automatizado com WebdriverIO, Appium e BrowserStack

Este repositório apresenta a solução desenvolvida como parte de uma avaliação prática de automação de testes mobile, utilizando as ferramentas WebdriverIO, Appium e execução em nuvem com BrowserStack.

---

## Objetivo

Automatizar o seguinte cenário em um dispositivo Android real acessado via BrowserStack:

1. Acessar a página de login: `https://the-internet.herokuapp.com/login`
2. Preencher as credenciais:

   * **Username:** `LucasLegal`
   * **Password:** `SecretPassword!`
3. Clicar no botão "Login"
4. Verificar se o login foi realizado com sucesso

---

## Tecnologias Utilizadas

* Node.js
* WebdriverIO
* Appium
* Mocha
* BrowserStack
* Allure Reporter

---

## Execução dos Testes

Para instalar as dependências e executar os testes:

```bash
npm install
npx wdio run wdio.conf.js
```

---

## Estrutura do Projeto

```
avaliacao-appium/
├── test/
│   ├── specs/             # Casos de teste
│   └── pageobjects/       # Page Objects utilizados nos testes
├── wdio.conf.js           # Arquivo de configuração do WebdriverIO
├── package.json
├── .gitignore
```

---

## Execução em Nuvem

O projeto está configurado para execução em um ambiente de nuvem real, por meio do BrowserStack. Os testes são executados em um dispositivo Android real, utilizando o navegador Chrome.

---
