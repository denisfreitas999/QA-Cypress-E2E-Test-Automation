// API Test
/* describe('API Adopet', () => {

    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlOGE2NGU4NS1hMzRiLTQ3ZGEtYjY1YS05MzczMDA5MWEyOGEiLCJhZG9wdGVyTmFtZSI6IkRvdWdsYXMgRGVsYXMiLCJpYXQiOjE3MTc2MzA0NzgsImV4cCI6MTcxNzg4OTY3OH0.0fmdPGM1hU567qvOxpRQ6FHtk3a0CEIyw6s0rYLZO38`
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/e8a64e85-a34b-47da-b65a-93',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
        });
    });
    
}) */

// Flaky test

describe('API Adopet', () => {
    const tempoEsperado = Math.random() * 1000;

    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlOGE2NGU4NS1hMzRiLTQ3ZGEtYjY1YS05MzczMDA5MWEyOGEiLCJhZG9wdGVyTmFtZSI6IkRvdWdsYXMgRGVsYXMiLCJpYXQiOjE3MTc2MzA0NzgsImV4cCI6MTcxNzg4OTY3OH0.0fmdPGM1hU567qvOxpRQ6FHtk3a0CEIyw6s0rYLZO38`
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/e8a64e85-a34b-47da-b65a-93',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
            expect(res.duration).to.be.lte(tempoEsperado);
        });
    });
    
})