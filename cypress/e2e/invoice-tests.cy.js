describe('TC003 - Validate invoice detais', () => {
  it('should validate date displayd on invoice detais', () => {
    cy.visit('#')
    cy.login('demouser','abc123')
    cy.openInvoiceDetails(1)
    cy.get('header').siblings().as('headerSibling')
      .first().contains('Rendezvous Hotel')
      .next().contains('Invoice #110 details')
    cy.get('@headerSibling').find('li')
      .first().should('have.text', 'Invoice Date: 14/01/2018')
      .next().should('have.text', 'Due Date: 15/01/2018')
    cy.get('@header').siblings('.table').first().as('firstTable').prev().should('have.text', 'Booking/Stay details')
    cy.get('@firstTable').find('tr').eq(0).within(() => {
      cy.get('td').eq(0).should('have.text', 'Booking Code')
      cy.get('td').eq(1).should('have.text', '0875')
    })
    cy.get('@firstTable').find('tr').eq(1).within(() => {
      cy.get('td').eq(0).should('have.text', 'Room')
      cy.get('td').eq(1).should('have.text', 'Superior Double')
    })

    cy.get('@firstTable').find('tr').eq(2).within(() => {
      cy.get('td').eq(0).should('have.text', 'Total Stay Count')
      cy.get('td').eq(1).should('have.text', '1')
    })

    cy.get('@firstTable').find('tr').eq(3).within(() => {
      cy.get('td').eq(0).should('have.text', 'Total Stay Amount')
      cy.get('td').eq(1).should('have.text', '$150')
    })

    cy.get('@firstTable').find('tr').eq(4).within(() => {
      cy.get('td').eq(0).should('have.text', 'Check-In')
      cy.get('td').eq(1).should('have.text', '14/01/2018')
    })

    cy.get('@firstTable').find('tr').eq(5).within(() => {
      cy.get('td').eq(0).should('have.text', 'Check-Out')
      cy.get('td').eq(1).should('have.text', '15/01/2018')
    })
    cy.get('@firstTable').siblings('h5').eq(1).as('customDetailsHeader').should('have.text', 'Customer Details')
    cy.get('@customDetailsHeader').siblings('div').should('have.text', '\n    \n    JOHNY SMITHR2, AVENUE DU MAROC123456\n    \n')
    cy.get('@firstTable').siblings('.table').as('billingDetaisTable').prev().should('have.text', 'Billing Details')
    cy.get('@billingDetaisTable').find('thead').within(() => {
      cy.get('td').eq(0).should('have.text', 'Deposit Nowt')
      cy.get('td').eq(1).should('have.text', 'Tax&VAT')
      cy.get('td').eq(2).should('have.text', 'Total Amount')
    })
    cy.get('@billingDetaisTable').find('tbody').within(() => {
      cy.get('td').eq(0).should('have.text', 'USD $20.90')
      cy.get('td').eq(1).should('have.text', 'USD $19')
      cy.get('td').eq(2).should('have.text', 'USD $209')
    })
  })
})