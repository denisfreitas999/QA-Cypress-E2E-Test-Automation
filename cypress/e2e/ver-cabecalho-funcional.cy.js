describe('Verificação do botão header de Tela inicial', () => {
  it("Visita a página de principal do AdoPet e testa os botão de home", ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click()  
  })
})