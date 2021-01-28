/**************-- Mapeamento --********************/
const el = {
    btt_Config: '[href="/manage_overview_page.php"]',
    btt_GerenciaPerfil: '[href="/manage_prof_menu_page.php"]',
    text_Plataforma: '#platform',
    text_OS: '#os',
    text_VersionOS: '#os-version',
    text_Description: '#description',
    btt_AddPerfil: '#account-profile-form > :nth-child(1) > .widget-box > .widget-body > .widget-toolbox > .btn',
    flag_DeletePerfil: ':nth-child(2) > :nth-child(2) > :nth-child(1) > .lbl',
    flag_EditarPerfil: ':nth-child(1) > :nth-child(2) > :nth-child(1) > .lbl',
    list_profile: ':nth-child(1) > :nth-child(2) > :nth-child(1) > .lbl'
}
class GerenciarPerfil {
    clickConfigBtt() {
        cy.get(el.btt_Config).click()
    }
    clickGerenciaPerfil() {
        cy.get(el.btt_GerenciaPerfil).click()
    }
    sendTextPlataforma() {
        cy.get(el.text_Plataforma).type('Widows')
    }
    sendTextOS() {
        cy.get(el.text_OS).type('Windows10')
    }
    sendTextVersionOS() {
        cy.get(el.text_VersionOS).type('Pro')
    }
    sendTextDescription() {
        cy.get(el.text_Description).type('Primeiro Perfil Criado')
    }
    clickBttSavePerfil() {
        cy.get(el.btt_AddPerfil).click()
    }
    clickDeletePerfil() {
        cy.get(el.flag_DeletePerfil).click()
    }
    selectDeletePerfil() {
        cy.get(el.list_profile).select('have.value', '')
    }
    alertFildPlataforma() {
        cy.get(el.text_Plataforma).should('have.length', 1)
        cy.get(el.text_Plataforma).then(($input) => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
    }

    alertFildOS() {
        cy.get(el.text_OS).should('have.length', 1)
        cy.get(el.text_OS).then(($input) => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
    }
    alertFilVersionOS() {
        cy.get(el.text_VersionOS).should('have.length', 1)
        cy.get(el.text_VersionOS).then(($input) => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
    }

} export default new GerenciarPerfil()