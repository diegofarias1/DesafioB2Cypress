/**************-- Mapeamento --********************/
const el = {
    btt_Config: ':nth-child(7) > a > .menu-text',
    btt_ManageProject: '.row > .nav > :nth-child(3) > a',
    btt_CreateNewProject: '.widget-toolbox > .form-inline > fieldset > .btn',
    text_ProjectName: '#project-name',
    list_StatusProject: '#project-status',
    text_DescriptionProject: '#project-description',
    btt_addProject: '.widget-toolbox > .btn',
    menssage_sucess: '.bold',
    list_StateProject: '#project-view-state'
    
}
class GerenciarProject {
    clickConfigBtt() {
        cy.get(el.btt_Config).click()
    }
    clickManageProject() {
        cy.get(el.btt_ManageProject).click()
    }
    clickCreateNewProject() {
        cy.get(el.btt_CreateNewProject).click()
    }
    sendtextNameProject() {
        cy.get(el.text_ProjectName).type('Project-X')
    }
    clickBttAddProject() {
        cy.get(el.btt_addProject).click()
    }
    assertCreatedSucess() {
        cy.get(el.menssage_sucess).should('contain', 'Operação realizada com sucesso.')
    }
    selectStateProjectPrivate() {
        cy.get(el.list_StateProject).select('50')
    }
    assertStateProject() {
        cy.get(el.list_StateProject).should('contain', 'privado')
    }
    sendVarTextNameProject(projeto) {
        cy.get(el.text_ProjectName).type(projeto)
    }
    alertNameProject() {
        cy.get(el.text_ProjectName).should('have.length', 1)
        cy.get(el.text_ProjectName).then(($input) => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
    }
    selectListStatusProjectDesenvolvimento() {
        cy.get(el.list_StatusProject).select('10')
    }
    selectListStatusProjectRelease() {
        cy.get(el.list_StatusProject).select('30')
    }
    selectListStatusProjectEstavel() {
        cy.get(el.list_StatusProject).select('50')
    }
    selectListStatusProjectObsoleto() {
        cy.get(el.list_StatusProject).select('70')
    }
}
export default new GerenciarProject()