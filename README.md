## Créditos
  
Desafio base2 Automação web

O que foi feito:

- Criado 50 Scripts de testes 
- Utilizado Data-Driven para criar alguns recursos
- Casos de teste foram executados em 3 navegadores ( Chrome, Edge , Firefox )
- Screenshots e videos estão sendo gravados automaticamente com o Mocha e o Cypress Dashboard
- Massa de testes foi preparada utlizando querys para criar projeto e deletes para limpar o banco.
- Utilizado JS para inserir dados em alguns campos.
- Utilizado o AzureDevops para agendar os testes
- Criado uma Pipeline no AzureDevops para CD-CI
- Criado um Agent local para rodar os testes utilizando o docker 
- Configurado yml para execução

## Arquivo Yml - AzureDevops
- master
pool:
    name: Diego
steps:
- task: NodeTool@0
  inputs:
    versionSpec: '10.x'
  displayName: 'Install Node.js'
- script: |
      npm install mysql
  displayName: 'install mysql'
- script: |
      npm run dashtest
  displayName: 'Run Cypress'
- task: PublishTestResults@2
  displayName: 'Publish the test reports'
  inputs:
    testResultsFiles: '**/test-*.xml'
  condition: succeededOrFailed()
  continueOnError: true
  
***Observação:*** Caso necessário que os testes rodem em navegadores específicos pode ser adicionado no Yml os comandos:
- cypress run --browser chrome
- cypress run --browser edge
- cypress run --browser firefox



## Arquitetura do Projeto - Cypress

- Interpretador Js - [Node.js - 12.16.1](https://nodejs.org/en/)

- Ambiente de desenvolvimento - [Visual Studio Code](https://code.visualstudio.com)

- Linguagem de desenvolvimento - [JavaScript](https://www.javascript.com)

- Ferramenta de testes automatizados - [Cypress - 6.4](http://cypress.io)

- Relatório de teste on-line -[Cypress Dashboard](https://dashboard.cypress.io/)

- Relatório de teste - [Mochawesome - 6.1.1](https://www.npmjs.com/package/mochawesome)

- Docker - [Docker](https://www.docker.com/get-started)

## Executar o projeto

 1. Install Node JS 
 2. Install NPM 
 3. Instalar Cypress 4.5 (npm install cypress@4.5)
 4. Install VSCode


Abrir o VSCode com o projeto e no terminal digitar o comando:

    npm install
    
    npm install mysql ( Realizei a configuração do banco no projeto com querys de restore e delete )

    npx cypress open
    
## Arquitetura:

-  `Fixture:` Local onde fica os atributos, ou seja, os dados (ex. nome, descrição, etc), podem ser usados arquivos como json, txt.
-  `Support:` Local onde fica as  `pages`  e `locators` que estarão no mesmo arquivo e também o `index` (configurações por exemplo de import);
-  `Screenshots:` Local onde são salvas as imagens capturadas quando o teste é falho;
-  `Vídeos:` Local onde são salvas vídeos dos testes executados.
-  `database:` local onde fica configurado as conexões com os bancos de dados
-  `Commands`: Comandos que facilitam a reutilização do codigo assim como PageObjetcs

***Observação:*** A arquitetura adotada

`integration`, `support`, `report`, `screenshots` e `vídeos`, para facilitar o desenvolvimento e manutenção não vamos adotar o uso de `fixtures` e em `support` mantive a arquitetura composta por `page`(pageObject), porém utilizei alguns `Commands` para facilitar alguns processos, por exemplo : 

- Carregar a massa de dados
- Excluir a massa de dados

  
## Testes Funcionais:
Configurando cypress.json:

Inserido no cypress.json a url que iremos utilizar, por exemplo:

    {
     "url":"http://localhost:8989
    }

 Observação: Aqui também podemos inserir no cypress.json, informações como usuário e senha.


