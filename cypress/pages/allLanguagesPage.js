class allLanguagesPage {

    elements = {
        languagesList: () => cy.get("[dir='ltr'] a"),
        languageEN: () => cy.get('#js-link-box-en'),
    }
}

module.exports = new allLanguagesPage();