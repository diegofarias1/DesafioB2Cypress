/**************-- Mapeamento --********************/
const el = {
    btt_CreateTask: '#sidebar > .nav > :nth-child(3) > a',
    list_Category: '#category_id',
    resume_text: '#summary',
    description_text: '#description',
    btt_SaveTask: '.widget-toolbox > .btn',
    msg_Confirmtask: '.bold',
    navigate_home: '.smaller-75',
    btt_ViewTask: ':nth-child(2) > a > .menu-text',
    btt_editTask: '.column-edit > a > .fa',
    os_text: '#os',
    btt_saveUpdateTask: '.widget-toolbox > .btn',
    operationSystemVerify: 'td.bug-os',
    dropzone: '.dropzone',
    anexoName: '.body',
    anexoTaskConfirm: '.bugnote-note',
    updateTask: '.widget-toolbox > .btn',
    btt_CloneTask: ':nth-child(6) > .form-inline > fieldset > .btn',
    relationTask: 'td > strong',
    alertCreateTask: '.alert > :nth-child(2)',
    linkNumberTask: ':nth-child(2) > :nth-child(1) > .column-id > :nth-child(1)',
    usernameInTask: '#bug_monitor_list_username',
    btt_adicionarUserfalse: '.table > :nth-child(1) > :nth-child(1) > :nth-child(2) > .form-inline > .btn',
    textPlataformtask: '#platform',
    textVersionOs: '#os_build',
    listProfile: '#profile_id',
    listFrequency: '#reproducibility',
    task_Resume:'.nav > :nth-child(6) > :nth-child(1)',
    assertResumeTask:':nth-child(1) > :nth-child(2) > .table > :nth-child(2) > :nth-child(1) > :nth-child(2)'


}
/*****************-- Ações --***********************/
class TaskPage {
    clickNewtask() {
        cy.get(el.btt_CreateTask).click()
    }
    selectCategory() {
        cy.get(el.list_Category).select('104')
    }
    sendTextResume() {
        cy.get(el.resume_text).type('Criando Primeiro caso de teste')
    }
    sendTextDescribe() {
        cy.get(el.description_text).type('Verificar a criação das tarefas de testes automatizados')
    }
    clickSaveNewTask() {
        cy.get(el.btt_SaveTask).click()
    }
    confirmTaskCreate() {
        cy.get(el.msg_Confirmtask).should('contain', 'Operação realizada com sucesso.')
    }
    navigate_home() {
        cy.get(el.navigate_home).click()
    }
    viewtaskcreated() {
        cy.get(el.btt_ViewTask).click()
    }
    clickEditTask() {
        cy.get(el.btt_editTask).click()
    }
    insertOsTask() {
        cy.get(el.os_text).type('Windows')
    }
    clickUpdateTask() {
        cy.get(el.btt_saveUpdateTask).click()
    }
    checkOperationalSystemTask() {
        cy.get(el.operationSystemVerify).should('contain', 'Windows')
    }
    uploadFile() {
        cy.get(el.dropzone).attachFile('anexo.pdf', { subjectType: 'drag-n-drop' });
    }
    confirmNameAnexo() {
        cy.get(el.anexoTaskConfirm).should('contain', 'anexo.pdf')
    }
    clickUpdateTaskinsert() {
        cy.get(el.updateTask).click()
    }
    clickbuttonCloneTask() {
        cy.get(el.btt_CloneTask).click()
    }
    assertRelatorionTask() {
        cy.get(el.relationTask).should('contain', 'tarefa')
    }
    alertResumeTask() {
        cy.get(el.resume_text).should('have.length', 1)
        cy.get(el.resume_text).then(($input) => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
    }
    alertDescriptionTask() {
        cy.get(el.description_text).should('have.length', 1)
        cy.get(el.description_text).then(($input) => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
    }
    alertCreateTask() {
        cy.get(el.alertCreateTask).should('contain', 'verifique novamente suas entradas.')
    }
    clickNumberTaskCreated() {
        cy.get(el.linkNumberTask).click()
    }
    sendUsernameFalseTask() {
        cy.get(el.usernameInTask).type('UsuarioFalse')
    }
    assertAlertUserinTask() {
        cy.get(el.alertCreateTask).should('contain', 'Usuário de nome "UsuarioFalse" não foi encontrado.')
    }
    clickBttAddUserFalse() {
        cy.get(el.btt_adicionarUserfalse).click()
    }
    selectCategoryBackEnd() {
        cy.get(el.list_Category).select('102')
    }
    selectCategoryDesign() {
        cy.get(el.list_Category).select('103')
    }
    selectCategoryFrontEnd() {
        cy.get(el.list_Category).select('101')
    }
    selectCategoryTest() {
        cy.get(el.list_Category).select('104')
    }
    insertPlataformTask() {
        cy.get(el.textPlataformtask).type('Windows')
    }
    insertVersionOStask() {
        cy.get(el.textPlataformtask).type('Pro')
    }
    selectProfile() {
        cy.get(el.listProfile).select('13')
    }
    selectFrequencySempre() {
        cy.get(el.listFrequency).select('10')
    }
    selectFrequencyAsvezes() {
        cy.get(el.listFrequency).select('30')
    }
    selectFrequencyAleatorio() {
        cy.get(el.listFrequency).select('50')
    }
    selectFrequencyNaoSeAtentou() {
        cy.get(el.listFrequency).select('70')
    }

    selectFrequencyIncapaz() {
        cy.get(el.listFrequency).select('90')
    }
    selectFrequencyND() {
        cy.get(el.listFrequency).select('100')
 
    }
    clickTaskResume(){
        cy.get(el.task_Resume).click()
      }
      assertResumeTask(){
        cy.get(el.assertResumeTask).should('contain','1')
      }
}

export default new TaskPage()

