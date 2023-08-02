Cypress.Commands.add('loginStandardUser', (
) => {
  const loginStandardUser = () => {
    cy.visit('/')
    cy.get('#user-name').type(Cypress.env('standarduser').user_name)
    cy.get('#password').type(Cypress.env('standarduser').password, { log: false })
    cy.get('#login-button').click()
  }
  loginStandardUser()
})

Cypress.Commands.add('loginLockedOutUser', (
  ) => {
    const loginLockedOutUser = () => {
      cy.visit('/')
      cy.get('#user-name').type(Cypress.env('lockedoutuser').user_name)
      cy.get('#password').type(Cypress.env('lockedoutuser').password, { log: false })
      cy.get('#login-button').click()
    }
    loginLockedOutUser()
  })

Cypress.Commands.add('inverterOrdem', (
) => {
  cy.get('.product_sort_container')
    .select('Name (Z to A)')
})

Cypress.Commands.add('adicionarProdutoAoCarrinho', (
) => {
  cy.get('#item_5_title_link').should('have.text', 'Sauce Labs Fleece Jacket').click()
  cy.get('.inventory_details_price').should('have.text', '$49.99')
  cy.get('.btn_primary').click()
  cy.get('.btn_secondary').should('have.text', 'REMOVE')
  cy.get('#shopping_cart_container').click()
  cy.url().should('include', '/cart.html')
  cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Fleece Jacket')
  cy.get('.checkout_button').click()

})

Cypress.Commands.add('checkoutPassoUm', checkout => {
  cy.visit('/checkout-step-one.html')
  cy.get('#first-name').type(checkout.nome)
  cy.get('#last-name').type(checkout.sobrenome)
  cy.get('#postal-code').type(checkout.codigoPostal)
  cy.get('.btn_primary').click()
})

Cypress.Commands.add('checkoutPassoDois', checkout => {
  cy.visit('/checkout-step-two.html')
  cy.get('.cart_button').click()
})

Cypress.Commands.add('logout', () => {
  cy.get('.bm-burger-button').click()
  cy.get('#logout_sidebar_link').click()
})





