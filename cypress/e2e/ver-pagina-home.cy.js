describe('Verificação da página de home do Adopet', () => {
  it("Visita a página de /home do Adopet", ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })
})