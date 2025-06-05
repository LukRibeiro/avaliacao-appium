📱 Avaliação Appium - Teste Automatizado com WebdriverIO e BrowserStack
Este projeto foi desenvolvido como parte de uma avaliação prática de automação de testes utilizando WebdriverIO, Appium e BrowserStack.

✅ Objetivo
Automatizar o seguinte cenário:

Acessar a página de login https://the-internet.herokuapp.com/login em um dispositivo Android real via BrowserStack.

Preencher as credenciais:

Username: tomsmith

Password: SuperSecretPassword!

Clicar no botão Login.

Verificar se o login foi realizado com sucesso.

🧪 Tecnologias utilizadas
Node.js

WebdriverIO

Appium

Mocha

BrowserStack

Allure Reporter

⚙️ Execução
Para executar o teste, basta rodar:

bash
Copy
npm install
npx wdio run wdio.conf.js
📂 Estrutura do projeto
bash
Copy
avaliacao-appium/
│
├── test/
│   ├── specs/             # Casos de teste
│   └── pageobjects/       # Page Objects usados nos testes
│
├── wdio.conf.js           # Configuração principal do WebdriverIO
├── package.json
├── .gitignore
🌐 Teste em nuvem

Este projeto está configurado para rodar diretamente no BrowserStack, usando um dispositivo Android real com o navegador Chrome.