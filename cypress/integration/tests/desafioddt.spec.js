///<reference types="Cypress"/>

//Import de Page
import loginPage from '../../support/pages/LoginPage.js';
import managmentProjectPage from '../../support/pages/ManagmentProjectPage.js'
const projetos = require('../../fixtures/projects.json')


describe('Testes MantisBugTracker', () => {
    afterEach(() => {
        cy.deleteProject()
    })
    beforeEach(() => {
        cy.createProject()
        cy.visit(Cypress.config('url'))
        var email = Cypress.config('username')
        var senha = Cypress.config('senha')
        loginPage.sendUser(email)
        loginPage.clickButtonLogin()
        loginPage.sendPassword(senha)
        loginPage.clickButtonLogin()

    })
    before(() => {
        cy.deleteProject()

    })
    describe('Projetos com DDT', () => {
        projetos.forEach(projeto => {
            it('Create Project', () => {
                managmentProjectPage.clickConfigBtt()
                managmentProjectPage.clickManageProject()
                managmentProjectPage.clickCreateNewProject()
                managmentProjectPage.sendVarTextNameProject(projeto.nome)
                managmentProjectPage.clickBttAddProject()
                managmentProjectPage.assertCreatedSucess()
            })
        });

        console.log();

    })
})