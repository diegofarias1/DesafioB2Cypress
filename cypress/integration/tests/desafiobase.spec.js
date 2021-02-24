///<reference types="Cypress"/>

//Import de Page
import loginPage from '../../support/pages/LoginPage.js';
import homePage from '../../support/pages/HomePage.js';
import { result } from 'lodash';
import managmentPage from '../../support/pages/ManagmentPage.js';
import taskPage from '../../support/pages/TaskPage.js'
import managmentProjectPage from '../../support/pages/ManagmentProjectPage.js'
import managmentMarkerPage from '../../support/pages/ManagmentMarkerPage.js'
import managmentPerfilPage from '../../support/pages/ManagmentPerfilPage.js'
import ManagmentPage from '../../support/pages/ManagmentPage.js';
import ManagmentMarkerPage from '../../support/pages/ManagmentMarkerPage.js';



//teste de um mesmo grupo podem ficar dentro de um describe

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
    describe('Logins', () => {

        it('Login Sucessfull', () => {
            //Validacao (Assert)
            loginPage.validateLogin()
        })
    })
    describe('Gerenciar', () => {
        describe('Users', () => {


            it('Create Users Email Duplicated', () => {
                var name = 'User'
                var nickname = 'Teste'
                var email = 'root@localhost'

                managmentPage.clickConfig()
                managmentPage.clickUserConfig()
                managmentPage.ClicknewUser()
                managmentPage.SendName(name)
                managmentPage.SendRealname(nickname)
                managmentPage.SendEmail(email)
                managmentPage.selectAcessNivel()
                managmentPage.clickSaveUser()
                managmentPage.assertEmailExist()
            })
            it('Create Users Name Duplicated', () => {
                var name = 'administrator'
                var nickname = 'admin'
                var email = 'e-mailteste@gmail.com'

                managmentPage.clickConfig()
                managmentPage.clickUserConfig()
                managmentPage.ClicknewUser()
                managmentPage.SendName(name)
                managmentPage.SendRealname(nickname)
                managmentPage.SendEmail(email)
                managmentPage.selectAcessNivel()
                managmentPage.clickSaveUser()
                managmentPage.assertNameExist()
            })

            it('Create User sucessfull', () => {

                var name = 'Userone'
                var nickname = 'One'
                var email = 'userone@email.com'

                managmentPage.clickConfig()
                managmentPage.clickUserConfig()
                managmentPage.ClicknewUser()
                managmentPage.SendName(name)
                managmentPage.SendRealname(nickname)
                managmentPage.SendEmail(email)
                managmentPage.selectAcessNivel()
                managmentPage.clickSaveUser()
                managmentPage.assertCreateUser()
                managmentPage.clickContinue()
                managmentPage.clickDeleteUserCreated()
                managmentPage.clickConfirmDeleteUserCreated()

                //Validacao (Assert)
                managmentPage.assertDeletedUser()
            })
            it('FilterUserTest', () => {
                var name = 'Usertwo'
                var nickname = 'two'
                var email = 'usertwo@email.com'

                managmentPage.clickConfig()
                managmentPage.clickUserConfig()
                managmentPage.ClicknewUser()
                managmentPage.SendName(name)
                managmentPage.SendRealname(nickname)
                managmentPage.SendEmail(email)
                managmentPage.selectAcessNivel()
                managmentPage.clickSaveUser()
                managmentPage.clickContinue()
                managmentPage.clickUserConfig()
                managmentPage.sendTextSearchUser(name)

                managmentPage.clickApplySearchUser()
                cy.wait(1000)

                managmentPage.clickNameUserFiltered()
                managmentPage.assertNameUserFiltered()
                managmentPage.clickDeleteUserCreated()
                managmentPage.clickConfirmDeleteUserCreated()

                //Validacao (Assert)
                managmentPage.assertDeletedUser()

            })
            it('Criar usuario sem o nome preenchido', () => {
                managmentPage.clickConfig()
                managmentPage.clickUserConfig()
                managmentPage.ClicknewUser()
                managmentPage.clickSaveUser()
                ManagmentPage.assertNameInvalido()
            })
            it('Delete User Created', () => {

                var name = 'Userone'

                managmentPage.clickConfig()
                managmentPage.clickUserConfig()
                managmentPage.ClicknewUser()
                managmentPage.SendName(name)
                managmentPage.clickSaveUser()
                managmentPage.clickContinue()
                managmentPage.clickDeleteUserCreated()
                managmentPage.clickConfirmDeleteUserCreated()

                //Validacao (Assert)
                managmentPage.assertDeletedUser()
            })
            it('Create User using JS', () => {

                var name = 'Usertree'
                var nickname = 'tree'
                var email = 'usertree@email.com'

                managmentPage.clickConfig()
                managmentPage.clickUserConfig()
                managmentPage.ClicknewUser()
                managmentPage.SendName(name)
                managmentPage.SendRealname(nickname)
                cy.get('#email-field').then($el => {
                    $el.val('usertree@email.com')
                    managmentPage.selectAcessNivel()
                    managmentPage.clickSaveUser()
                    managmentPage.clickContinue()
                    managmentPage.clickDeleteUserCreated()
                    managmentPage.clickConfirmDeleteUserCreated()

                    //Validacao (Assert)
                    managmentPage.assertDeletedUser()
                })
            })

            it('CreateUserPerfilVisualziador', () => {
                var name = 'Userone'
                var nickname = 'One'
                var email = 'userone@email.com'

                managmentPage.clickConfig()
                managmentPage.clickUserConfig()
                managmentPage.ClicknewUser()
                managmentPage.SendName(name)
                managmentPage.SendRealname(nickname)
                managmentPage.SendEmail(email)
                managmentPage.selectAcessNivelVisualizador()
                managmentPage.clickSaveUser()
                managmentPage.assertCreateUser()
                managmentPage.clickContinue()
                managmentPage.clickDeleteUserCreated()
                managmentPage.clickConfirmDeleteUserCreated()

                //Validacao (Assert)
                managmentPage.assertDeletedUser()
            })
            it('CreateUserPerfilRelator', () => {
                var name = 'Userone'
                var nickname = 'One'
                var email = 'userone@email.com'

                managmentPage.clickConfig()
                managmentPage.clickUserConfig()
                managmentPage.ClicknewUser()
                managmentPage.SendName(name)
                managmentPage.SendRealname(nickname)
                managmentPage.SendEmail(email)
                managmentPage.selectAcessNivelrelator()
                managmentPage.clickSaveUser()
                managmentPage.assertCreateUser()
                managmentPage.clickContinue()
                managmentPage.clickDeleteUserCreated()
                managmentPage.clickConfirmDeleteUserCreated()

                //Validacao (Assert)
                managmentPage.assertDeletedUser()
            })
            it('CreateUserPerfilAtualizador', () => {
                var name = 'Userone'
                var nickname = 'One'
                var email = 'userone@email.com'

                managmentPage.clickConfig()
                managmentPage.clickUserConfig()
                managmentPage.ClicknewUser()
                managmentPage.SendName(name)
                managmentPage.SendRealname(nickname)
                managmentPage.SendEmail(email)
                managmentPage.selectAcessNivelAtualizador()
                managmentPage.clickSaveUser()
                managmentPage.assertCreateUser()
                managmentPage.clickContinue()
                managmentPage.clickDeleteUserCreated()
                managmentPage.clickConfirmDeleteUserCreated()

                //Validacao (Assert)
                managmentPage.assertDeletedUser()
            })
            it('CreateUserPerfilGerente', () => {
                var name = 'Userone'
                var nickname = 'One'
                var email = 'userone@email.com'

                managmentPage.clickConfig()
                managmentPage.clickUserConfig()
                managmentPage.ClicknewUser()
                managmentPage.SendName(name)
                managmentPage.SendRealname(nickname)
                managmentPage.SendEmail(email)
                managmentPage.selectAcessNivelGerente()
                managmentPage.clickSaveUser()
                managmentPage.assertCreateUser()
                managmentPage.clickContinue()
                managmentPage.clickDeleteUserCreated()
                managmentPage.clickConfirmDeleteUserCreated()

                //Validacao (Assert)
                managmentPage.assertDeletedUser()
            })

        })
        describe('Projetos', () => {

            it('Criar Project com campos obrigatorios', () => {
                managmentProjectPage.clickConfigBtt()
                managmentProjectPage.clickManageProject()
                managmentProjectPage.clickCreateNewProject()
                managmentProjectPage.sendtextNameProject()
                managmentProjectPage.clickBttAddProject()
                managmentProjectPage.assertCreatedSucess()
            })
            it('Criar Projeto com Visibilidade Private', () => {
                managmentProjectPage.clickConfigBtt()
                managmentProjectPage.clickManageProject()
                managmentProjectPage.clickCreateNewProject()
                managmentProjectPage.sendtextNameProject()
                managmentProjectPage.selectStateProjectPrivate()

                //Validacao (Assert)
                managmentProjectPage.assertStateProject()
                managmentProjectPage.clickBttAddProject()
                //Validacao (Assert)
                managmentProjectPage.assertCreatedSucess()
            })
            //const projetos = require('../../fixtures/projects.json')
            const projetos = ['ProjectX', 'ProjectY', 'ProjectZ']

            projetos.forEach(projeto => {
                it(`CriarProjeo - DataDriven ${projeto}`, function () {

                    managmentProjectPage.clickConfigBtt()
                    managmentProjectPage.clickManageProject()
                    managmentProjectPage.clickCreateNewProject()
                    managmentProjectPage.sendVarTextNameProject(projeto)
                    managmentProjectPage.clickBttAddProject()

                    //Validacao (Assert)
                    managmentProjectPage.assertCreatedSucess()
                })

            })
            describe('DataDriven', function () {
                before(() => {
                    cy.fixture('projects.json').as('ttdata')

                })

                it('Data Driven arquivo JSON LOOPING', function () {
                    this.ttdata['Array Projetos'].forEach(ttObject => {

                        //Outra forma de fazer DDT
                        //const ArrayProjetos = this.ttdata
                        //cy.get(ArrayProjetos['Array Projetos']).each((ttObject) => {
                        //this.ttdata['Array Projetos'].forEach(ttObject => {


                        managmentProjectPage.clickConfigBtt()
                        managmentProjectPage.clickManageProject()
                        managmentProjectPage.clickCreateNewProject()
                        managmentProjectPage.sendVarTextNameProject(ttObject.projeto)
                        managmentProjectPage.clickBttAddProject()
                        managmentProjectPage.assertCreatedSucess()



                    })
                })

            })


            it('Validar campo Obrigatorio Nome do Projeto', () => {
                managmentProjectPage.clickConfigBtt()
                managmentProjectPage.clickManageProject()
                managmentProjectPage.clickCreateNewProject()
                managmentProjectPage.alertNameProject()
            })
            it('Criar Projeto com Select Manage DSN', () => {
                managmentProjectPage.clickConfigBtt()
                managmentProjectPage.clickManageProject()
                managmentProjectPage.clickCreateNewProject()
                managmentProjectPage.sendtextNameProject()
                managmentProjectPage.selectListStatusProjectDesenvolvimento()
                managmentProjectPage.clickBttAddProject()
                managmentProjectPage.assertCreatedSucess()
            })
            it('Criar Projeto com Select Manage Estavel', () => {
                managmentProjectPage.clickConfigBtt()
                managmentProjectPage.clickManageProject()
                managmentProjectPage.clickCreateNewProject()
                managmentProjectPage.sendtextNameProject()
                managmentProjectPage.selectListStatusProjectEstavel()
                managmentProjectPage.clickBttAddProject()
                managmentProjectPage.assertCreatedSucess()
            })
            it('Criar Projeto com Select Manage Obsoleto', () => {
                managmentProjectPage.clickConfigBtt()
                managmentProjectPage.clickManageProject()
                managmentProjectPage.clickCreateNewProject()
                managmentProjectPage.sendtextNameProject()
                managmentProjectPage.selectListStatusProjectObsoleto()
                managmentProjectPage.clickBttAddProject()
                managmentProjectPage.assertCreatedSucess()
            })
            it('Criar Projeto com Select Manage Release ', () => {
                managmentProjectPage.clickConfigBtt()
                managmentProjectPage.clickManageProject()
                managmentProjectPage.clickCreateNewProject()
                managmentProjectPage.sendtextNameProject()
                managmentProjectPage.selectListStatusProjectRelease()
                managmentProjectPage.clickBttAddProject()
                managmentProjectPage.assertCreatedSucess()
            })

        })
        describe('Marker', () => {
            it('Criar Marcador com campos obrigatorios', () => {

                managmentMarkerPage.clickConfigBtt()
                managmentMarkerPage.clickMarkersBtt()
                managmentMarkerPage.sendMarkerName()
                managmentMarkerPage.clickCreateMarkerbtt()
                managmentMarkerPage.verifyCreated()
                managmentMarkerPage.clickAcessMarker()
                managmentMarkerPage.clickDeleteMarkerbtt()
                managmentMarkerPage.assertConfirmDeleteMarker()
                managmentMarkerPage.clickConfirmDeletemarkerbtt()

            })
            it('Criar Marcador com todos os campos', () => {
                managmentMarkerPage.clickConfigBtt()
                managmentMarkerPage.clickMarkersBtt()
                managmentMarkerPage.sendMarkerName()
                managmentMarkerPage.sendMarkerDescription()
                managmentMarkerPage.clickCreateMarkerbtt()
                managmentMarkerPage.verifyCreated()
                managmentMarkerPage.clickAcessMarker()
                managmentMarkerPage.clickDeleteMarkerbtt()
                managmentMarkerPage.assertConfirmDeleteMarker()
                managmentMarkerPage.clickConfirmDeletemarkerbtt()
            })
            it('Atualizar Marcador', () => {

                managmentMarkerPage.clickConfigBtt()
                managmentMarkerPage.clickMarkersBtt()
                managmentMarkerPage.sendMarkerName()
                managmentMarkerPage.sendMarkerDescription()
                managmentMarkerPage.clickCreateMarkerbtt()
                managmentMarkerPage.clickAcessMarker()
                managmentMarkerPage.clickUpdateMarkerbtt()
                managmentMarkerPage.sendnewValueNameMarker()
                managmentMarkerPage.clickAfterUpdateMarker()
                managmentMarkerPage.assertConfirmUpdatedSucess()
                managmentMarkerPage.clickDeleteMarkerbtt()
                managmentMarkerPage.assertConfirmDeleteMarker()
                managmentMarkerPage.clickConfirmDeletemarkerbtt()


            })
            it('Verificar Obrigatoriedade do campo Nome', () => {
                managmentMarkerPage.clickConfigBtt()
                managmentMarkerPage.clickMarkersBtt()
                ManagmentMarkerPage.alertNameMarker()
            })
        })
        describe('Perfil', () => {
            it('Cadastrar Perfil Campos Obrigatorios', () => {
                managmentPerfilPage.clickConfigBtt()
                managmentPerfilPage.clickGerenciaPerfil()
                managmentPerfilPage.sendTextPlataforma()
                managmentPerfilPage.sendTextOS()
                managmentPerfilPage.sendTextVersionOS()
                managmentPerfilPage.clickBttSavePerfil()
            })
            it('Validar Obrigatoriedade do Campo Plataforma', () => {
                managmentPerfilPage.clickConfigBtt()
                managmentPerfilPage.clickGerenciaPerfil()
                managmentPerfilPage.sendTextOS()
                managmentPerfilPage.sendTextVersionOS()
                managmentPerfilPage.alertFildPlataforma()

            })
            it('Validar Obrigatoriedade do Campo Campo SO', () => {
                managmentPerfilPage.clickConfigBtt()
                managmentPerfilPage.clickGerenciaPerfil()
                managmentPerfilPage.sendTextPlataforma()
                managmentPerfilPage.sendTextVersionOS()
                managmentPerfilPage.alertFildOS()
            })
            it('Validar Obrigatoriedade do Campo VersaoSO', () => {
                managmentPerfilPage.clickConfigBtt()
                managmentPerfilPage.clickGerenciaPerfil()
                managmentPerfilPage.sendTextPlataforma()
                managmentPerfilPage.sendTextOS()
                managmentPerfilPage.alertFilVersionOS()

            })

        })
    })

    describe('Tasks', () => {

        it('Create tasks only required fields', () => {
            taskPage.clickNewtask()
            taskPage.selectCategory()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()
            taskPage.clickSaveNewTask()

            //Validacao (Assert)
            taskPage.confirmTaskCreate()
            taskPage.navigate_home()
        })

        it('Adicionando sistema operacional nas tarfas', () => {
            taskPage.clickNewtask()
            taskPage.selectCategory()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()
            taskPage.clickSaveNewTask()
            taskPage.confirmTaskCreate()
            taskPage.viewtaskcreated()
            taskPage.clickEditTask()
            taskPage.insertOsTask()
            taskPage.clickUpdateTask()

            //Validacao (Assert)
            taskPage.checkOperationalSystemTask()

        })
        it('Criando Tarefa Com Anexo', () => {
            taskPage.clickNewtask()
            taskPage.selectCategory()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()
            taskPage.uploadFile()
            taskPage.clickSaveNewTask()
            // Validacao(Assert)
            taskPage.confirmTaskCreate()
            taskPage.confirmNameAnexo()

        })

        it.skip('Criando Tarefa com Anexo maior que o permitido', () => {
            taskPage.clickNewtask()
            taskPage.selectCategory()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()

            const stub = cy.stub()
            cy.on('window:alert', stub)

            cy.get('.dropzone').attachFile('fullsize.jpg', { subjectType: 'drag-n-drop' })
                //.wait(30000)
                .then(() => {
                    expect(stub.getCall(0)).to.be.calledWith('Os seguintes arquivos:\n"fullsize.jpg" (10.97 MiB)\n\nexcedem o tamanho máximo de arquivo permitido (2.00 MiB)')

                })
        })
        it('Duplicando Tarefa', () => {
            taskPage.clickNewtask()
            taskPage.selectCategory()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()
            taskPage.clickSaveNewTask()
            taskPage.confirmTaskCreate()
            taskPage.viewtaskcreated()
            taskPage.clickEditTask()
            taskPage.clickUpdateTaskinsert()
            taskPage.clickbuttonCloneTask()

            // Validacao(Assert)
            taskPage.assertRelatorionTask()
            taskPage.clickSaveNewTask()
            taskPage.confirmTaskCreate()

        })
        it('Validando obrigatoriedade do campo Resumo ', () => {
            taskPage.clickNewtask()
            taskPage.alertResumeTask()
        })
        it('Validando obrigatoriedade do campo Descrição ', () => {
            taskPage.clickNewtask()
            taskPage.alertResumeTask()
        })
        it('Validando obrigatoriedade do campo Categoria ', () => {
            taskPage.clickNewtask()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()
            taskPage.clickSaveNewTask()
            taskPage.alertCreateTask()
        })
        it('Informar Usuario invalido na terefa', () => {
            taskPage.clickNewtask()
            taskPage.selectCategory()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()
            taskPage.clickSaveNewTask()
            taskPage.viewtaskcreated()
            taskPage.clickNumberTaskCreated()
            taskPage.sendUsernameFalseTask()
            taskPage.clickBttAddUserFalse()
            taskPage.assertAlertUserinTask()

        })
        it('View Resume Tasks', () => {
            taskPage.clickNewtask()
            taskPage.selectCategory()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()
            taskPage.clickSaveNewTask()

            //Validacao (Assert)
            taskPage.confirmTaskCreate()
            taskPage.clickTaskResume()
            taskPage.assertResumeTask()


        })
        describe('Category', () => {


            it('Create Task Category Backend', () => {
                taskPage.clickNewtask()
                taskPage.selectCategoryBackEnd()
                taskPage.sendTextResume()
                taskPage.sendTextDescribe()
                taskPage.clickSaveNewTask()

                //Validacao (Assert)
                taskPage.confirmTaskCreate()
                taskPage.navigate_home()
            })
            it('Create Task Category Design', () => {
                taskPage.clickNewtask()
                taskPage.selectCategoryDesign()
                taskPage.sendTextResume()
                taskPage.sendTextDescribe()
                taskPage.clickSaveNewTask()

                //Validacao (Assert)
                taskPage.confirmTaskCreate()
                taskPage.navigate_home()
            })
            it('Create Task Category Frontend', () => {
                taskPage.clickNewtask()
                taskPage.selectCategoryFrontEnd()
                taskPage.sendTextResume()
                taskPage.sendTextDescribe()
                taskPage.clickSaveNewTask()

                //Validacao (Assert)
                taskPage.confirmTaskCreate()
                taskPage.navigate_home()
            })
            it('Create Task Category Test', () => {
                taskPage.clickNewtask()
                taskPage.selectCategoryTest()
                taskPage.sendTextResume()
                taskPage.sendTextDescribe()
                taskPage.clickSaveNewTask()

                //Validacao (Assert)
                taskPage.confirmTaskCreate()
                taskPage.navigate_home()
            })
        })
        it('Select Profile Create Task', () => {
            taskPage.clickNewtask()
            taskPage.selectCategory()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()
            taskPage.selectProfile()
            taskPage.clickSaveNewTask()

            //Validacao (Assert)
            taskPage.confirmTaskCreate()
            taskPage.navigate_home()

        })
        it('Criando Tarefa preenchendo Perfil ( Plataforma )', () => {
            taskPage.clickNewtask()
            taskPage.selectCategory()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()
            taskPage.insertPlataformTask()
            taskPage.clickSaveNewTask()
            // Validacao(Assert)
            taskPage.confirmTaskCreate()

        })
        it('Criando Tarefa preenchendo Perfil ( OS )', () => {
            taskPage.clickNewtask()
            taskPage.selectCategory()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()
            taskPage.insertOsTask()
            taskPage.clickSaveNewTask()

            // Validacao(Assert)
            taskPage.confirmTaskCreate()

        })
        it('Criando Tarefa preenchendo Perfil ( VERSAO OS )', () => {
            taskPage.clickNewtask()
            taskPage.selectCategory()
            taskPage.sendTextResume()
            taskPage.sendTextDescribe()
            taskPage.insertVersionOStask()

            taskPage.clickSaveNewTask()
            // Validacao(Assert)
            taskPage.confirmTaskCreate()

        })
        describe('Frequencia', () => {

            it('Criando Tarefa com frequencia "SEMPRE', () => {
                taskPage.clickNewtask()
                taskPage.selectCategory()
                taskPage.sendTextResume()
                taskPage.sendTextDescribe()
                taskPage.selectFrequencySempre()
                taskPage.clickSaveNewTask()
                // Validacao(Assert)
                taskPage.confirmTaskCreate()

            })
            it('Criando Tarefa com frequencia "AS VEZES', () => {
                taskPage.clickNewtask()
                taskPage.selectCategory()
                taskPage.sendTextResume()
                taskPage.sendTextDescribe()
                taskPage.selectFrequencyAsvezes()
                taskPage.clickSaveNewTask()
                // Validacao(Assert)
                taskPage.confirmTaskCreate()

            })
            it('Criando Tarefa com frequencia "Aleatorio', () => {
                taskPage.clickNewtask()
                taskPage.selectCategory()
                taskPage.sendTextResume()
                taskPage.sendTextDescribe()
                taskPage.selectFrequencyAleatorio()
                taskPage.clickSaveNewTask()
                // Validacao(Assert)
                taskPage.confirmTaskCreate()

            })
            it('Criando Tarefa com frequencia "Nao Se Atentou', () => {
                taskPage.clickNewtask()
                taskPage.selectCategory()
                taskPage.sendTextResume()
                taskPage.sendTextDescribe()
                taskPage.selectFrequencyNaoSeAtentou()
                taskPage.clickSaveNewTask()
                // Validacao(Assert)
                taskPage.confirmTaskCreate()

            })
            it('Criando Tarefa com frequencia "Incapaz de Produzir', () => {
                taskPage.clickNewtask()
                taskPage.selectCategory()
                taskPage.sendTextResume()
                taskPage.sendTextDescribe()
                taskPage.selectFrequencyIncapaz()
                taskPage.clickSaveNewTask()
                // Validacao(Assert)
                taskPage.confirmTaskCreate()

            })
            it('Criando Tarefa com frequencia "N/D', () => {
                taskPage.clickNewtask()
                taskPage.selectCategory()
                taskPage.sendTextResume()
                taskPage.sendTextDescribe()
                taskPage.selectFrequencyND()
                taskPage.clickSaveNewTask()
                // Validacao(Assert)
                taskPage.confirmTaskCreate()
            })
        })
    })
})

