module.exports = {
    '@tags': ['championat'],
    'Go to main championat.com' (browser) {
        date = '2019-08-12';
        browser
            .url(`https://www.championat.com/stat/football/#${date}`)
            .waitForElementPresent(".mc-filter__tabs", 4000)
            .click(".mc-page-content .mc-filter__calendar > span")
            .pause(10000)
            .end();
    }
};