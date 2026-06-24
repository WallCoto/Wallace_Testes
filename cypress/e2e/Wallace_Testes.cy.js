import { faker } from '@faker-js/faker'

describe('Wallace_Testes', () => {
 beforeEach(() => {
   cy.visit('./src/Index.html')
 })
it('Verifica o titulo da pagina', () => {
  cy.title()
    .should('be.equal', 'Praticando Testes')
  })

it('Verifica o texto do titulo', () => {
  cy.get('#title')
    .should('have.text', 'Praticando Testes')
  })

it('Verifica o campo nome', () => {
  const nomeAleatorio = faker.person.firstName()

  cy.get('[name="firstName"]')
    .type(nomeAleatorio)
    .should('have.value', nomeAleatorio)
})

it('Verifica o campo sobrenome', () => {
  const sobrenomeAleatorio = faker.person.lastName()
  
  cy.get('[name="lastName"]')
    .type(sobrenomeAleatorio)
    .should('have.value', sobrenomeAleatorio)
})

it('Verifica o campo email', () => {
  const emailAleatorio = faker.internet.email()
  
  cy.get('#email')
    .type(emailAleatorio)
    .should('have.value', emailAleatorio)
})

it('Verifica o campo telefone', () => {
  const telefone =
  `${faker.number.int({ min: 11, max: 99 })}` +
  `9${faker.number.int({ min: 10000000, max: 99999999 })}`;

cy.get('#phone')
  .type(telefone)
  .should('have.value', telefone);
})

it('Tenta enviar o formulario em branco', () => {
  cy.clock()

  cy.contains('button', 'Enviar')
    .click()

  cy.get('.error')
    .should('be.visible')
    
  cy.tick(3000)

  cy.get('.error')
    .should('not.be.visible')
})

it('Preenche formulário com dados aleatórios', () => {
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName();

  const email = faker.internet.email({
    firstName: nome,
    lastName: sobrenome
  });

  const telefone =
    `${faker.number.int({ min: 11, max: 99 })}` +
    `9${faker.number.int({ min: 10000000, max: 99999999 })}`;

  cy.get('[name="firstName"]')
    .type(nome)
    .should('have.value', nome);

  cy.get('[name="lastName"]')
    .type(sobrenome)
    .should('have.value', sobrenome);

  cy.get('#email')
    .type(email)
    .should('have.value', email);

  cy.get('#phone')
    .type(telefone);
})

})
