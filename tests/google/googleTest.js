module.exports = {
    '@tags': ['google'],
    'Google advance search Elon Mask' (browser){

        const mainQueryText = 'Elon Musk';
        const advancedMainQueryInputLocator = "[name = 'as_q']";
        const languageDropdownLocator = "#lr_button";
        const languageDropdownValueLocator = ".goog-menuitem[value='lang_it']";
        // const countryDropdownLocator = "#cr_button";
        // const countryDropdownValueLocator = ".goog-menuitem[value='countryRU']";
        const lastUpdateDropdownLocator = "#as_qdr_button";
        const lastUpdateDropdownValueLocator = ".goog-menuitem[value='d']";
        const submitButtonLocator = ".jfk-button[type = 'submit']";
        const mainQueryInputLocator = "#searchform [name='q']";
        // const searchPropertiesLanguageLocator = "#hdtbMenus #lr_lang_1it";
        // const searchPropertiesUpdateDateLocator = "#hdtbMenus #qdr_d";
        browser
            .url("https://google.com/advanced_search")
            .waitForElementPresent(".appbar")
            .perform(() => { debugger; })
            .setValue(advancedMainQueryInputLocator, mainQueryText)
            .click(languageDropdownLocator)
            .click(languageDropdownValueLocator)
            .perform(() => { debugger; })
            // .click(countryDropdownLocator)
            // .click(countryDropdownValueLocator)
            .click(lastUpdateDropdownLocator)
            .click(lastUpdateDropdownValueLocator)
            .saveScreenshot("./tests_output/google-advance-search-setup.png")
            .click(submitButtonLocator)
            .waitForElementVisible(mainQueryInputLocator, 2000)
            .assert.urlContains('as_q=Elon+Musk', `URL params: Search query is ${mainQueryText}`)
            .assert.urlContains('as_qdr=d', "URL params: Update date is per day")
            .assert.urlContains('lr=lang_it', "URL params: Searching language set as Italian");
        
        browser.assert.valueContains(mainQueryInputLocator, `${mainQueryText}`, `Query params: ${mainQueryText}`)
            // .assert.containsText(searchPropertiesLanguageLocator, "итальянский", "Language is 'итальянский' on filter bar")
            // .assert.containsText(searchPropertiesUpdateDateLocator, "24 часа", "Update date is 'За 24 часа' on filter bar")
            .saveScreenshot("./tests_output/google-advance-search-result.png")
            .end();
    }
}