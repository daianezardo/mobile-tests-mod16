const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './tests/specs/login.spec.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: "Android",
        maxInstances: 1,

        "appium:deviceName": "Exercicio-16",
        "appium:platformVersion": "11.0",
        "appium:orientation": "PORTRAIT",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "appium:noReset": true,
        "appium:newCommandTimeout": 240,
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".MainActivity"
    },
];

exports.config = config;