exports.config = {
    runner: 'local',

    user: 'lucascosta_7qzQ1C',
    key: 'L2JwrnxzB4aB9Tpvgzdz',

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],

    maxInstances: 10,

    capabilities: [{
        platformName: 'Android',
        browserName: 'Chrome',
        'bstack:options': {
            deviceName: 'Google Pixel 7',
            osVersion: '13.0',
            realMobile: 'true'
        }
    }], // 👈 A vírgula estava faltando aqui

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['browserstack'],

    framework: 'mocha',

    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
};
