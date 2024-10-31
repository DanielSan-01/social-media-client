describe("login", () => {
  it("logs user in", () => {
    cy.visit('/')

    cy.get('#registerModal').within(() => {
      // Ensure that the register form is visible before proceeding
      cy.get('#registerForm').should('be.visible')

      cy.get('.modal-dialog.modal-dialog.modal-dialog-centered.modal-dialog-scrollable').within(() => {
        cy.get('#registerForm').within(() => {
          cy.get('.modal-footer').children('.btn.btn-outline-success').click()
        })
      })
    })

    cy.get('#loginModal').within(() => {
      // Ensure email input is visible before typing
      cy.get('input[type="EMAIL"]').should('be.visible').type(Cypress.env('EMAIL'))
      cy.get('input[type="PASSWORD"]').type(Cypress.env('PASSWORD'))
    })

    cy.get('#loginForm').within(() => {
      cy.get('.modal-footer').children('.btn.btn-success').click()
    })
  })
})





/* describe("login", ()=>{
  it("logs user in", () => {
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
  })
}) */

//arrange set up data
//act do something with data
// assert 

//loginForm

//btn btn-outline-success me-2

//class="btn.btn-outline-success"