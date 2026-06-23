describe('Wallace_Testes', () => {
 beforeEach(() => {
   cy.visit('./src/Index.html')
 })
it('Verifica o titulo da pagina', () => {
  cy.title()
    .should('be.equal', 'Praticando Testes')
  })

it.only('Verifica o texto do titulo', () => {
  cy.get('#title')
    .should('have.text', 'Praticando Testes')
  })
})
