Cypress.Commands.add('login', (username, password) => {
    cy.get('[name=username]').click().type(username)
    cy.get('[name=password]').click().type(password)
    cy.get('#btnLogin').click()
}),

Cypress.Commands.add('validateLoginErrorMessage', () => {
    cy.get('[class=container]').children().as('errorMessageElement')
    cy.get('@errorMessageElement').should('have.class', 'alert alert-danger mt-3')
    cy.get('@errorMessageElement').should('contains.text', 'Wrong username or password.')    
})

Cypress.Commands.add('openInvoiceDetails', (row) => {
    cy.get('.mt-3').siblings().eq(row).find('a').invoke('removeAttr', 'target').click()
    cy.get('header').as('header').contains('Invoice Details')
})
