///<reference types="Cypress"/>
/**************-- Mapeamento --********************/
const el = {
    btt_Config:':nth-child(7) > a > .menu-text',
    btt_Markers:'.row > .nav > :nth-child(4) > a',
    text_name:'#tag-name',
    text_description:'#tag-description',
    btt_CreateMarker:'#manage-tags-create-form > .widget-box > .widget-body > .widget-toolbox > .btn',
    link_marker:'tr > :nth-child(1) > a',
    btt_UpdateMarker:'[action="tag_update_page.php"] > fieldset > .btn',
    btt_DeleteMarker:'[action="tag_delete.php"] > fieldset > .btn',
    btt_ConfirmDeleteMarker:'.center > .btn',
    btt_ConfirmUpdateMarker:'.widget-box > :nth-child(3) > .btn',
    msg_AssertDeleteMarker:'.alert > .bigger-110',
    text_ConfirmUpdateTask:'tbody > :nth-child(2) > :nth-child(2)',
    btt_AfterUpdate:'.widget-box > :nth-child(3) > .btn',
    textNameAltered:'.table > :nth-child(1) > :nth-child(2) > :nth-child(2)'
    
  }
  class GerenciarMarker {
    clickConfigBtt(){
        cy.get(el.btt_Config).click()
    }
    clickMarkersBtt(){
        cy.get(el.btt_Markers).click()
    }
    sendMarkerName(){
        cy.get(el.text_name).type('MarkerOne')
    }
    sendMarkerDescription(){
        cy.get(el.text_description).type('Descricao')
    }
    clickCreateMarkerbtt(){
        cy.get(el.btt_CreateMarker).click()
    }
    clickAcessMarker(){
        cy.get(el.link_marker).click()
    }
    clickUpdateMarkerbtt(){
        cy.get(el.btt_UpdateMarker).click()
    }
    clickDeleteMarkerbtt(){
        cy.get(el.btt_DeleteMarker).click()
    }
    clickConfirmDeletemarkerbtt(){
        cy.get(el.btt_ConfirmDeleteMarker).click()
    }
    clickConfirmUpdateMarker(){
        cy.get(el.btt_UpdateMarker).click()
    }
    assertConfirmDeleteMarker(){
        cy.get(el.msg_AssertDeleteMarker).should('contain','Você tem certeza que quer apagar esse marcador?')
    }
    verifyCreated(){
        cy.get(el.link_marker).should('exist','MarkerOne')
    }
    sendnewValueNameMarker(){
        cy.get(el.text_name).clear().type('MarkerTwo')
    }
    assertConfirmUpdatedSucess(){
        cy.get(el.textNameAltered).should('contain','MarkerTwo')
    }
    clickAfterUpdateMarker(){
       cy.get(el.btt_AfterUpdate).click()
        
    }
    alertNameMarker() {
        cy.get(el.text_name).should('have.length', 1)
        cy.get(el.text_name).then(($input) => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
}


}
    export default new GerenciarMarker()