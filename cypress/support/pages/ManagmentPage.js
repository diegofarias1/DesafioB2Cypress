/**************-- Mapeamento --********************/
const el = {
    btt_Config:':nth-child(7) > a > .menu-text',
    btt_ManageUser:'.row > .nav > :nth-child(2) > a',
    btt_NewUserCreate:'.pull-left > .btn',
    tag_NameUser:'#user-username',
    tag_Realname:'#user-realname',
    tag_Email:'#email-field',
    liist_AcessNivel:'#user-access-level',
    btt_SaveUser:'.widget-toolbox > .btn',
    validateReturnUser:'.alert > .bigger-110',
    alertCreateUser:'.center > .btn',
    btt_DeleteUser:'#manage-user-delete-form > fieldset > span > .btn',
    btt_prosseguir:'.alert > .btn-group > .btn',
    validateErrorExist:'.alert',
    assertOperationError:'.alert > :nth-child(2)'   ,
    assertOperationSucessfull:'.bold',
    textSearchUser:'#search',
    btt_SearchUser:'fieldset > .btn',
    linkUserCreated:'tbody > tr > :nth-child(1) > a',
    linknovo:'tbody > tr > :nth-child(1)',
    tag_EditNameUser:'#edit-username',
    

    
  
  }
  /*****************-- Ações --***********************/
  class GerenciarPage {
    clickConfig(){
        cy.get(el.btt_Config).click()
    }
    clickUserConfig(){
        cy.get(el.btt_ManageUser).click()
    }
    ClicknewUser(){
      cy.get(el.btt_NewUserCreate).click()
  }
    SendName(name){
      cy.get(el.tag_NameUser).type(name)
    }
    SendRealname(nickname){
      cy.get(el.tag_Realname).type(nickname)
    }
    SendEmail(email){
      cy.get(el.tag_Email).type(email)
    }
    selectAcessNivel(){
      cy.get(el.liist_AcessNivel)
      .select('90')
      .should('contain','administrador')
    }
    clickSaveUser(){
      cy.get(el.btt_SaveUser).click()
    }
    confirmCreateUser(){
      cy.get(el.alertCreateUser).should('contain','criado com um nível de acesso')
    }
    clickContinue(){
      cy.get(el.btt_prosseguir).click()
    }

    clickDeleteUserCreated(){
      cy.get(el.btt_DeleteUser).click()
    }
    clickConfirmDeleteUserCreated(){
      cy.get(el.alertCreateUser).click()
    }
    assertConfirmeDelete(){
      cy.get(el.validateDeleteUser).should('contain','')

    }
    assertEmailExist(){
      cy.get(el.validateErrorExist).should('contain','Este e-mail já está sendo usado')
    }
    assertCreateUser() {
      cy.get(el.validateReturnUser).should('contain','Usuário Userone criado')
    }
    assertDeletedUser(){
      cy.get(el.assertOperationSucessfull).should('contain','Operação realizada com sucesso.')
    }
    assertNameExist(){
      cy.get(el.assertOperationError).should('contain','Este nome de usuário já está sendo usado')
    }
    sendTextSearchUser(name){
      cy.get(el.textSearchUser).type(name)
    
    }
    clickApplySearchUser(){
      cy.get(el.btt_SearchUser,{ timeout: 30000}).click()
    }
    clickNameUserFiltered(){
      cy.get(el.linkUserCreated, { timeout: 30000}).click()
      
    }
    assertNameUserFiltered(){
      cy.get(el.tag_EditNameUser).should('have.value','Usertwo')
    }
    assertCreateUserTwo() {
      cy.get(el.validateReturnUser).should('contain','Usuário Usertwo criado')
    }
    assertNameInvalido(){
      cy.get(el.assertOperationError).should('contain','O nome de usuário não é inválido.')
    }
    selectAcessNivelVisualizador(){
      cy.get(el.liist_AcessNivel)
      .select('10')
      .should('contain','visualizador')
    }
    selectAcessNivelrelator(){
      cy.get(el.liist_AcessNivel)
      .select('25')
      .should('contain','relator')
    }
    selectAcessNivelAtualizador(){
      cy.get(el.liist_AcessNivel)
      .select('40')
      .should('contain','atualizador')
    }
    selectAcessNivelDesenvolvedor(){
      cy.get(el.liist_AcessNivel)
      .select('55')
      .should('contain','desenvolvedor')
    }
    selectAcessNivelGerente(){
      cy.get(el.liist_AcessNivel)
      .select('70')
      .should('contain','gerente')
    }
  }
  export default new GerenciarPage()
  
  