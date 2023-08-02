import { faker } from '@faker-js/faker'

describe('Compra Sauce Demo', () => {
    context('Dado que estou na página de Checkout', () => {
        context('Quando insiro os dados de compra', () => {

            const checkout = {
                nome: faker.person.firstName(),
                sobrenome: faker.person.lastName(),
                codigoPostal: faker.location.zipCode()
            }
            beforeEach(() => {
                cy.loginStandardUser()
                cy.adicionarProdutoAoCarrinho()
            })

            it('Acesso a página de finalização da compra', () => {
                cy.checkoutPassoUm(checkout)
                cy.url().should('include', '/checkout-step-two.html')
                cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Fleece Jacket')
                cy.get('.inventory_item_price').should('have.text', '$49.99')
            })
        })
    })
})