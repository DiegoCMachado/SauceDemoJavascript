import { faker } from '@faker-js/faker'

describe('Compra Sauce Demo', () => {
    context('Dado que estou na página de Inventário', () => {
        context('Quando adiciono um produto ao carrinho', () => {
            beforeEach(() => {
                cy.loginStandardUser()
            })

            it('Acesso a página de checkout', () => {
                cy.adicionarProdutoAoCarrinho()
                cy.url().should('include', '/checkout-step-one.html')

            })
        })
    })
})
