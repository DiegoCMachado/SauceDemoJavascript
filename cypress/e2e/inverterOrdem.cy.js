describe('Compra Sauce Demo', () => {
    context('Dado que estou na págian de inventário e desejo alterar a ordem de exibição dos produtos', () => {
      context('Quando seleciono a opção Z-A', () => {
        it('Visualizo os produtos em ordem alfabética inversa', () => {
          cy.loginStandardUser()
          cy.url().should('include', '/inventory.html')
          cy.inverterOrdem()
          cy.get('.product_sort_container').should('have.value', 'za')
        })
      })
    })
  })
  
  