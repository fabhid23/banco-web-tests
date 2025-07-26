# banco-web-tests

Projeto de testes automatizados utilizando Cypress e JavaScript, desenvolvido para demonstrar aos alunos da **Mentoria 2.0** como estruturar, organizar e executar automações de testes end-to-end em aplicações web.

## Objetivo

O objetivo deste projeto é ensinar, na prática, como automatizar testes de aplicações web utilizando o Cypress, abordando desde a configuração do ambiente até a geração de relatórios, além de boas práticas como o uso de Custom Commands para reutilização de código.

## Componentes do Projeto

- **Cypress**: Framework principal de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar e padronizar ações repetitivas nos testes.
- **cypress-mochawesome-reporter**: Geração de relatórios detalhados e visualmente amigáveis dos testes executados.
- **Estrutura de pastas**:
  - `cypress/`: Contém os testes, comandos customizados e fixtures.
    - `integration/`: Especificações dos testes automatizados.
    - `support/commands.js`: Definição dos Custom Commands.
    - `screenshots/` e `reports/`: Gerados automaticamente após execução dos testes.
  - `package.json`: Gerenciamento de dependências e scripts.

## Pré-requisitos

- Node.js (versão recomendada: 18.x ou superior)
- npm ou yarn
- Clonar e executar:
  - [banco-api](https://github.com/juliodelimas/banco-api)
  - [banco-web](https://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/banco-web-tests.git
   cd banco-web-tests
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Certifique-se de que a API e a aplicação web estejam rodando localmente:
   - Siga as instruções nos repositórios [banco-api](https://github.com/juliodelimas/banco-api) e [banco-web](https://github.com/juliodelimas/banco-web).

## Execução dos Testes

- Para abrir o Cypress em modo interativo:
  ```bash
  npx cypress open
  ```

- Para rodar os testes em modo headless e gerar relatório:
  ```bash
  npx cypress run
  ```

- Para gerar o relatório Mochawesome após os testes:
  ```bash
  npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json
  npx marge cypress/reports/report.json -f report -o cypress/reports
  ```

## Estrutura dos Testes

Os testes estão organizados por funcionalidades dentro da pasta `cypress/integration`. Cada arquivo representa um conjunto de cenários de teste para uma funcionalidade específica do sistema.

Exemplo de estrutura:
```
cypress/
  integration/
    login.spec.js
    transferencia.spec.js
    ...
  support/
    commands.js
```

## Custom Commands

Os Custom Commands estão definidos em `cypress/support/commands.js` e servem para abstrair ações comuns, como login, cadastro de usuário, transferência, etc.

Exemplo de uso:
```js
// Realiza login com usuário padrão
cy.login('usuario', 'senha');
```

Principais comandos implementados:
- `cy.login(usuario, senha)`: Realiza login na aplicação.
- `cy.cadastrarConta(dados)`: Cadastra uma nova conta bancária.
- `cy.realizarTransferencia(origem, destino, valor)`: Efetua uma transferência entre contas.

## Relatórios

Após a execução dos testes, os relatórios são gerados automaticamente na pasta `cypress/reports` utilizando o **cypress-mochawesome-reporter**. Eles apresentam detalhes dos testes executados, facilitando a análise de falhas e evidências.

---

Sinta-se à vontade para contribuir ou adaptar este projeto para seus estudos