//**********Mapeamento de elementos**********
const el = {
    tituloHomeText: '.title > .col > span'
  }

//**********Ações**********
class HomePage {

  validarTituloHome(param){
    cy.get(el.tituloHomeText).invoke('text').should('include', param);
  }

}

export default new HomePage();