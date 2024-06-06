# Cypress E2E Test Automation - Alura Course Overview

## Índice
1. [Criando Testes com o Cypress](#1-criando-testes-com-o-cypress)
2. [Automatizando Cenários de Teste](#2-automatizando-cenários-de-teste)
3. [Gerar a Documentação e Comando](#3-gerar-a-documentação-e-comando)
4. [Usando Fixtures e Stubs em Testes](#4-usando-fixtures-e-stubs-em-testes)
5. [Aplicando Boas Práticas com o Cypress](#5-aplicando-boas-práticas-com-o-cypress)

## 1. Criando Testes com o Cypress
Nesta fase, aprendi a iniciar um novo projeto de testes com Cypress:
- **Iniciando o projeto**: Utilização do comando `npm init` para criar o arquivo `package.json`.
- **Configuração**: Configuração do Cypress através da interface gráfica Launchpad.
- **Criação de testes**: Criação de arquivos de teste `.spec.js` dentro do diretório `e2e`.
- **Descrevendo a suíte de testes**: Uso do comando `describe`.
- **Definindo casos de teste**: Utilização das funções `it` e `cy.visit()` para indicar a URL carregada antes de cada teste.
- **Assertions**: Uso dos comandos `cy.get()`, `.type()`, `.click()` e `.contains()` para realizar assertions.

## 2. Automatizando Cenários de Teste
Nesta etapa, foquei na criação de testes automatizados mais detalhados:
- **Selector Playground**: Identificação de elementos usando o Selector Playground do Cypress.
- **Cenários de teste**: Criação de testes para cenários de caminho feliz e triste.
- **Exploração com DevTools**: Uso detalhado do DevTools para identificar elementos HTML.
- **Busca por texto**: Utilização do comando `cy.contains()`.

## 3. Gerar a Documentação e Comando
Aqui, foquei em documentar e agilizar a execução dos testes:
- **Execução headless**: Rodar testes sem abrir a interface gráfica do Cypress.
- **Relatórios e vídeos**: Verificação de relatórios e vídeos gerados em modo headless.
- **Mochawesome**: Personalização e geração de relatórios em HTML.
- **Cypress Cloud**: Associação do projeto ao Cypress Cloud para documentação de testes em nuvem.
- **Dashboard**: Integração dos resultados dos testes para uma visão mais analítica.
- **Comandos personalizados**: Criação de comandos como `cy.login()` e `cy.registrar()`.

## 4. Usando Fixtures e Stubs em Testes
Nesta fase, aprendi a usar dados externos e simular comportamentos:
- **Stubs**: Criação de dublês de teste para simular comportamentos da API.
- **Requisições de API**: Testes com requisições de API para verificar respostas do sistema.
- **Fixtures**: Utilização de dados de arquivos externos nos casos de teste.

## 5. Aplicando Boas Práticas com o Cypress
Finalmente, foquei em otimizar a qualidade e segurança dos testes:
- **Identificação de testes flaky**: Identificação e correção de testes instáveis.
- **Boas práticas**: Implementação de práticas recomendadas para desenvolvimento de testes E2E com Cypress.
- **Segurança**: Ocultação de dados sensíveis durante as requisições.

---

Este curso me proporcionou uma base inicial para automatização de testes E2E com Cypress, capacitando-me a enfrentar os desafios do desenvolvimento de software com mais segurança e eficiência. 