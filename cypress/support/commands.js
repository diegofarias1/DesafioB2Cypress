//import taskPage from '../../support/pages/TaskPage.js'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import  'cypress-file-upload' ;

Cypress.Commands.add('createProject', () => {
    const dbName = 'bugtracker'
    const query = 'INSERT INTO mantis_project_table (NAME,STATUS,ENABLED,view_state,access_min,description,category_id,inherit_global) VALUES ("Base10",30,1,10,10,"teste2",1,1)'
    cy.task('queryDatabase', { dbName, query }).as('Create Project')
})
Cypress.Commands.add('createCategory', () => {
    const dbName = 'bugtracker'
    const query = 'INSERT INTO mantis_category_table (NAME) VALUES ("Category")'
    cy.task('queryDatabase', { dbName, query }).as('Category')
})

Cypress.Commands.add('deleteProject', () => {
    const dbName = 'bugtracker'
    const query = 'DELETE from mantis_project_table'
    cy.task('queryDatabase', { dbName, query }).as('Delete projects')
})

Cypress.Commands.add('windowAlert', () => {
    cy.on('window:alert', msg => {
        console.log(msg)
        expect(msg).to.be.contain('excedem o tamanho máximo de arquivo permitido')
        //taskPage.clickSaveNewTask()
})
})
