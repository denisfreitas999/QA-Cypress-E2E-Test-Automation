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
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    // Verifica se contém algo e clica.
    cy.get('[data-test="register-button"]').click();
    // Pega o elemento e insere  o texto.
    cy.get('[data-test="input-name"]').type('Douglas Fernando');
    cy.get('[data-test="input-email"]').type('douglinhasguerreiro@gmail.com');
    cy.get('[data-test="input-password"]').type('Douglas123');
    cy.get('[data-test="input-confirm-password"]').type('Douglas123');
    // Verifica se contém algo e clica.
    cy.get('[data-test="submit-button"]').click();
  })
})
