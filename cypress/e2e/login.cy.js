describe('Compra Sauce Demo', () => {
  context('Dado que acesso a página inicial do SauceDemo', () => {
    context('Quando insiro os dados do usuário standard', () => {
      it('Acesso a página de inventário', () => {
        cy.loginStandardUser()
        cy.url().should('include', '/inventory.html')
      })
    })
  })

  context('Quando insiro os dados do usuário lockedout', () => {
    it('Vejo mensagem de usuarário lockedout', () => {
      cy.loginLockedOutUser()
      cy.get('.error-button').should('be.visible')
    })
  })
  
})
