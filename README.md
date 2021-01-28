## Créditos
  
Este template foi criado em apoio com a colaboradora Base2 Laedy Cecília e Saymon Oliveira.
Dúvidas estamos à disposição. Bons estudos.


## Arquitetura do Projeto - Cypress

- Interpretador Js - [Node.js - 12.16.1](https://nodejs.org/en/)

- Ambiente de desenvolvimento - [Visual Studio Code](https://code.visualstudio.com)

- Linguagem de desenvolvimento - [JavaScript](https://www.javascript.com)

- Ferramenta de testes automatizados - [Cypress - 4.5](http://cypress.io)

- Relatório de teste on-line -[Cypress Dashboard](https://dashboard.cypress.io/)

- Relatório de teste - [Mochawesome - 6.1.1](https://www.npmjs.com/package/mochawesome)

  
## Executar o projeto

 1. Install Node JS 
 2. Install NPM 
 3. Instalar Cypress 4.5 (npm install cypress@4.5)
 4. Install VSCode

Abrir o VSCode com o projeto e no terminal digitar o comando:

    npm install

    npx cypress open

O cypress abrirá com todas as specs (arquivos de testes) do projeto:

![enter image description here](https://i.imgur.com/DyquSNU.png)

Clique no spec que deseje executar os testes e os mesmos serão executados:

![enter image description here](https://i.imgur.com/ALrkj3y.png)

Permaneça com a tela aberta do spec que esteja codando e quando você salvar o arquivo no VSCode (ctrl+ s), os testes serão reexecutados automaticamente.


## Arquitetura:

  

Agora que instalamos o cypress vamos ver sobre a arquitetura padrão composta por:

 -  `Fixture:` Local onde fica os atributos, ou seja, os dados (ex. nome, descrição, etc), podem ser usados arquivos como json, txt.
-  `Support:` Local onde fica as  `pages`  e `locators` que estarão no mesmo arquivo e também o `index` (configurações por exemplo de import);
-  `Screenshots:` Local onde são salvas as imagens capturadas quando o teste é falho;
-  `Vídeos:` Local onde são salvas vídeos dos testes executados.

***Observação:*** A arquitetura adotada pela Base2 é composta por:

`integration`, `support`, `report`, `screenshots` e `vídeos`, para facilitar o desenvolvimento e manutenção não vamos adotar o uso de `fixtures` e em `support` não utilizaremos o `_locators_` e `_commands_`, ficando composto por `page`(pageObject).

  

## Testes Funcionais:
Configurando cypress.json:

No cypress.json iremos inserir a url que iremos utilizar, por exemplo:


    {
     "url":"http://blackmirror.crowdtest.me.s3-website-us-east-1.amazonaws.com/"
    }

 Observação: Aqui também podemos inserir no cypress.json, informações como usuário e senha.

- Criando page:

![enter image description here](https://i.imgur.com/68YpABf.png)

- Criando Integration (testes):

![enter image description here](https://i.imgur.com/VaT5W2I.png)

- Criando Teste com DataDriven, exemplo:

![enter image description here](https://i.imgur.com/haFHU1d.png)

  

    const senhas = [1234, 1235, 8965]
     senhas.forEach(senha=>{
     it(`RealizarLoginInvalido - DataDriven ${senha}`, function(){
     ***Insere ações aqui****
    })
    )}

> Observação: Ao usar dataDriven não posso usar função =>(assync)

  

- Exemplos de Validações (Asserts):

  

![validacoes](https://i.imgur.com/ZmmcFXp.png)

![Validacoes](https://i.imgur.com/cMC6qEr.png)

![validacoes](https://i.imgur.com/BasbOAF.png)

  

## Configurando Mochawesome:

No terminal:

    npm install mocha --save-dev
    
    npm install cypress-multi-reporters --save-dev
    
    npm install mochawesome --save-dev
    
    npm install mochawesome-merge --save-dev
    
    npm install mochawesome-report-generator --save-dev

No cypress.json:


    "reporter": "cypress-multi-reporters",
     "reporterOptions": {
     "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
     "reportDir": "cypress/reports/mocha",
    "quite": true,
     "overwrite": false,
     "html": true,
     "json": true
     }
     }

 No scripts do package.json:

     "scripts": {
     "open": "cypress open",
     "cy": "cypress run",
     "clean:reports": "rmdir /S /Q cypress\\reports && mkdir cypress\\reports && mkdir cypress\\reports\\mochareports",
     "pretest": "npm run clean:reports",
     "combine-reports": "mochawesome-merge cypress/reports/mocha/*.json >cypress/reports/mochareports/report.json",
     "generate-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports",
     "posttest": "npm run combine-reports && npm run generate-report",
     "test" : "npm run scripts || npm run posttest"
     }

  

Se desejar usar o Dashboard do Cypress utilize o tópico abaixo:

  

## Criando Dashboard cypress do projeto:

Execute o comando:
`npm run open`

 Ao abrir o Cypress entre no menu:
  `Runs`-> `Set up project to record`

Verifique se o seu Id foi adicionado no cypress.json, por exemplo:
  `"projectId": "pm3i8p"`

E no package.json insira o run do seu dashboard gerado pelo cypress, por exemplo:
`"dashtest": "cypress run --record --key 84322b27-aa11-4a50-849f-81333fa491eb"`

Agora para executar o teste gerando relatório no dashboard, basta inserir o comando
  `npm run dashtest`

  
  

## Configurando CD/CI - Pipeline (GitLab):

GitlabCI está configurado para o projeto e também uma organização no Dashboard Cypress foi feita.
Foi usado um arquivo yml no gitlab-ci.

Badge:  ![pipeline](https://gitlab.com/templates-automacao-base2/cypresswebtemplate/badges/master/pipeline.svg)

 
![pipeline codigo](https://i.imgur.com/ThMD4U5.png)




## Criando um novo projeto Cypress (Mac OS)

**Preparando o ambiente:**

Crie uma pasta para o projeto, ex: `ProjetoCy`
 
No cmd para esta pasta insira o comando:
 `mkdir projeto`

Abra a Pasta criada:
 `cd projeto`

  Nesta pasta criada dê o comando:
  `npm init -y`

![criando projeto](https://i.imgur.com/hcSI6W7.png)

  

### Para Instalar o cypress: 
  `npm install cypress@3`

 Irá adicionar o package-lock.json e o node_modules ao projeto.

![instalando cypress](https://i.imgur.com/fE3d3pj.png)

  

E agora vamos abrir o projeto pela primeira vez:
 `npx open cypress`

Irá abrir o cypress e inserir a pasta cypress no projeto com a arquitetura padrao e exemplos, como também o cypress.json:

Para executar os testes direto no terminal utilizamos:
  `npx cypress run`

  

### Configurando o package.json
Para executar os testes posteriormente vamos configurar o json, adicionando o seguinte:

    "scripts": {
    "open": "cypress open",
    "cy": "cypress run"
    }

![configurando package](https://i.imgur.com/vBEvOdK.png)

- Para executar no cypress;
  `npm run open`


![abrindo cypress](https://i.imgur.com/Mdig0he.png)

 - Para executar no terminal;
 `npm run cy`