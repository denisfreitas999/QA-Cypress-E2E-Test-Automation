describe('Visite a página de principal do AdoPet e clique no botão: Ver pets disponíveis para adoção', () => {
    it('Deve buscar a página de adoção de pets disponíveis para adoção através da página principal do Adopet', () => {
      // Visita a página principal
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      // Busca e verifica o botão para visitar a página de pets
      cy.contains('a','Ver pets disponíveis para adoção').click();
    })
  })