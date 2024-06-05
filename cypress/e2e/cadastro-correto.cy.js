// Formatação com atributos da ferramenta de desenvolvedor do navegador
/* describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    // Verifica se contém algo e clica.
    cy.contains('a', 'Cadastrar').click();
    // Pega o elemento e insere  o texto.
    cy.get('input[name="nome"]').type('Douglas Fernando');
    cy.get('input[name="email"]').type('douglinhasguerreiro@gmail.com');
    cy.get('input[name="password"]').type('Douglas123');
    cy.get('input[name="confirm_password"]').type('Douglas123');
    // Verifica se contém algo e clica.
    cy.contains('button', 'Cadastrar').click();
  })
}) */

// Formatação com atributos da ferramenta de desenvolvedor do cypress

describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastro('Douglas Fernando', 'douglinhasguerreiro@gmail.com', 'Douglas123', 'Douglas123');
  })
})
