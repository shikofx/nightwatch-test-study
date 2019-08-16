module.exports = {
    '@tags': ['cldpsg'],
    'Go to main cloudpassage.com' (browser) {
        const imgLogoLocator = ".logo";
        browser
            .url(`https://www.cloudpassage.com`)
            .waitForElementVisible(imgLogoLocator, 1000, false, null, 'UI: Logo is visible')
            .assert.attributeContains(imgLogoLocator, "src", "logo.svg", "UI: Logo image is enabled")
            .end();
    }
};