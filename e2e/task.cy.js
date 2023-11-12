describe('performing the task', () => {
  it('sending empty form', () => {
    cy.visit('https://cliniccards.com/en')
    cy.contains('Log in').click()
    cy.get('button.btn').click()
   
    cy.get('#emailError').should('be.visible')
    cy.contains('Enter the password').should('be.visible')
    cy.scrollTo("top")
  
    

  })
})