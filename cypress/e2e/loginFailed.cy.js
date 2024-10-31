describe("loginFailed", () => {
  it("user login failed", () => {
    cy.visit('/')

    cy.get('#registerModal').within(() => {
      // Wait until the register form is visible
      cy.get('#registerForm').should('be.visible')

      cy.get('.modal-dialog.modal-dialog.modal-dialog-centered.modal-dialog-scrollable').within(() => {
        cy.get('#registerForm').within(() => {
          cy.get('.modal-footer').children('.btn.btn-outline-success').click()
        })
      })
    })

    cy.get('#loginModal').within(() => {
      // Ensure email input is visible before typing
      cy.get('input[type="EMAIL"]')
        cy.should('be.visible')
        cy.type('wrong@stud.noroff.no')
        cy.invoke('attr', 'pattern')
        cy.should('eq', '[\\w\\-.]+@(stud.)?noroff.no$')

      cy.get('input[type="PASSWORD"]').type(Cypress.env('PASSWORD'))

      // Check for alert message
      cy.on('window:alert', (message) => {
        expect(message).to.equal('Either your username was not found or your password is incorrect')
      })
    })

    cy.get('#loginForm').within(() => {
      cy.get('.modal-footer').children('.btn.btn-success').click()
    })
  })
})






/* describe("loginFailed", ()=>{
  it("user login failed", () => {
    cy.visit('/')
    cy.get('#registerModal').within(()=>{
      cy.wait(500);

      cy.get('.modal-dialog.modal-dialog.modal-dialog-centered.modal-dialog-scrollable').within(()=>{
        cy.get('#registerForm').within(()=>{
          cy.get('.modal-footer').children('.btn.btn-outline-success').click()
        })
      })
    })
    cy.wait(500)
    cy.get('#loginModal').within(()=>{
      cy.get('input[type="EMAIL"]').type('wrong@stud.noroff.no')
      .invoke('attr', 'pattern')
      .should('eq', '[\\w\\-.]+@(stud.)?noroff.no$')


      cy.get('input[type="PASSWORD"]').type(Cypress.env('PASSWORD'))
      cy.on('window:alert', (message) => {
        expect(message).to.equal(
          'Either your username was not found or your password is incorrect'
        )
      //cy.get('.modal-footer').children('.btn.btn-success').click()
    })
    cy.get('#loginForm').within(()=>{
      cy.get('.modal-footer').children('.btn.btn-success').click()
      cy.wait(200)
    })
  })
  
  })
})

//arrange set up data
//act do something with data
// assert 

//loginForm

//btn btn-outline-success me-2

//class="btn.btn-outline-success" */