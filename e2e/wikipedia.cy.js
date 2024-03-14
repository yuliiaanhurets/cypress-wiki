import mainPage from "../pages/mainPage.js"
import allLanguagesPage from "../pages/allLanguagesPage.js"

describe('wikipedia spec', () => {
  it('should show button on wiki EN main page', () => {
    cy.visit('https://www.wikipedia.org/');
    allLanguagesPage.elements.languagesList().should('have.length', 9);
    allLanguagesPage.elements.languageEN().click();

    mainPage.elements.createAccountButton().should('be.visible');
    mainPage.elements.loginButton().should('be.visible');
    mainPage.elements.loginMoreOptionsButton().should('be.visible');
  })
})