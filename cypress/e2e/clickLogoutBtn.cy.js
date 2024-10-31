describe("logout", () => {
  it("logs user out", () => {
    cy.visit('/')

    cy.get('#registerModal').within(() => {
      // Wait until the register form is visible
      cy.get('#registerForm', { timeout: 10000 }).should('be.visible')

      cy.get('.modal-dialog.modal-dialog.modal-dialog-centered.modal-dialog-scrollable').within(() => {
        cy.get('#registerForm').within(() => {
          cy.get('.modal-footer').children('.btn.btn-outline-success').click()
        })
      })
    })

    cy.get('#loginModal').within(() => {
      cy.get('input[type="EMAIL"]').should('be.visible').type(Cypress.env('EMAIL'))
      cy.get('input[type="PASSWORD"]').type(Cypress.env('PASSWORD'))
    })

    cy.get('#loginForm').within(() => {
      cy.get('.modal-footer').children('.btn.btn-success').click()
    })

    // Wait for logout button to appear after login, indicating a successful login
    cy.get('.btn.btn-outline-warning.me-2', { timeout: 10000 }).should('be.visible').click()
  })
})










/* describe("logout", ()=>{
  it("logs user out", () => {
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
      cy.get('input[type="EMAIL"]').type(Cypress.env('EMAIL'))
      cy.get('input[type="PASSWORD"]').type(Cypress.env('PASSWORD'))
      //cy.get('.modal-footer').children('.btn.btn-success').click()
    })
    cy.get('#loginForm').within(()=>{
      cy.get('.modal-footer').children('.btn.btn-success').click()
    })
    cy.wait(200)
    cy.get('.btn.btn-outline-warning.me-2').click()
  })
})

//btn.btn-outline-warning me-2
//arrange set up data
//act do something with data
// assert  */