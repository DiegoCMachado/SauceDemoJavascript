import { faker } from '@faker-js/faker'

describe('Compra Sauce Demo', () => {
    context('Dado que estou logado', () => {
        context('Quando sleciono a opção de logout', () => {
        beforeEach(() => {
            cy.loginStandardUser()            
        })
        it('Retorno para a página inicial', () => {
          cy.logout()
          cy.url().should('include', '/index.html')
        })
      })
    })
  })
  
  