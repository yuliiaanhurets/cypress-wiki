class mainPage {

    elements = {
        createAccountButton: () => cy.get('#pt-createaccount-2'),
        loginButton: () => cy.get('#pt-login-2'),
        loginMoreOptionsButton: () => cy.get('#vector-user-links-dropdown-label')
    }
}

module.exports = new mainPage();