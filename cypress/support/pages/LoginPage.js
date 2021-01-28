/**************-- Mapeamento --********************/
const el = {
  userField: '#username',
  btt_Login: '.width-40',
  passwordField:'#password', 
  btt_Enter: '.width-40',
  expectedPage: 'body',
  msgErro: '.login-error'
}
/*****************-- Ações --***********************/
class LoginPage {
  sendUser(user){
      cy.get(el.userField).type(user)
  }

  clickButtonLogin(login){
      cy.get(el.btt_Login).click()
  }

  sendPassword(password){
      cy.get(el.passwordField).type(password)
  }

  validateLogin(expectedPage){
      cy.get(el.expectedPage).should('contain', 'administrator')
  }
  

  //ValidarLoginInvalido(msgErro){
    //  cy.get(el.msgErro).should('contain', msgErro)
  //}
}
export default new LoginPage()

