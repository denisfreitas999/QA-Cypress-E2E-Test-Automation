# Principais comandos

##  Para abrir a interface gráfica

npx cypress open 

##  Para rodar todos os testes em background pelo terminal

npx cypress run

## Para rodar um teste específico pelo terminal

npx cypress run --spec ".\cypress\e2e\nome-do-teste.cy.js"

## Para rodar todos os testes usando o cypress gerando o reporter mochawesome para registro de relatórios

npx cypress run --reporter mochawesome

## Integração com o Cypress Cloud

npx cypress run --record --key cf239005-5db1-4f12-b5ed-d4fa4cb419fc
