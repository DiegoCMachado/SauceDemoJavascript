import { faker } from '@faker-js/faker'

describe('Compra Sauce Demo', () => {
    context('Dado que estou na página de finalização da compra', () => {
        context('Quando clico no botão de finalizar', () => {
            const checkout = {
                nome: faker.person.firstName(),
                sobrenome: faker.person.lastName(),
                codigoPostal: faker.location.zipCode()
            }

            beforeEach(() => {
                cy.loginStandardUser()
                cy.adicionarProdutoAoCarrinho()
                cy.checkoutPassoUm(checkout)
            })

            it('Visualio a página de compra completa', () => {

                cy.get('.cart_button').should('have.text', 'FINISH')
                cy.checkoutPassoDois()
                cy.url().should('include', '/checkout-complete.html')
                cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
            })
        })
    })
})