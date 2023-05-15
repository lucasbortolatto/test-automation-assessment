describe('TC001 - Login (Positive) Test', () => {
  it('should be redirected to the account page when logging using correct user and password', () => {
    cy.visit('#')
    cy.login('demouser','abc123')
    cy.url().should('eq', Cypress.config().baseUrl+'account')
  })
})

describe('TC002 - Login (Negative) Tests', () => {
  it('should display error when trying to log with wrong user and/or passoword', () => {
    cy.visit('#')
    cy.login('Demouser','abc123')
    cy.validateLoginErrorMessage()
    cy.login('demouser_','xyz')
    cy.validateLoginErrorMessage()
    cy.login('demouser','nananana')
    cy.validateLoginErrorMessage()
    cy.login('demouser','nananana')
    cy.validateLoginErrorMessage()
    cy.login('demouser','abc123')
    cy.validateLoginErrorMessage()
  })
})





