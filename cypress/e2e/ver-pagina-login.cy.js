describe('Verificação da página de login do Adopet', () => {
    it("Visita a página de /login do Adopet", ()=>{
      cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })
})