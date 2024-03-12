import { fakerPT_BR as faker } from '@faker-js/faker'
import { cpf } from 'cpf-cnpj-validator'
import { DEPOSIT, DEPOSIT_ADDITIONAL_INFORMATION, LOGIN, LOGOFF, REGISTRATION_FORM, BO_LOGIN } from '../e2e/web-customer/release-betmotion-regression/constants'
import { v4 as uuidv4 } from 'uuid'

Cypress.Commands.add('fillFormPlayer', ({ userName, password }) => {
   const random = uuidv4().replace(/\d/g, '')[0]
   const fullName = `${faker.person.fullName()}${random}`
   const fullNameWithoutAccents = fullName.normalize('NFD').replace(/[^a-zA-Z0-9\s]/g, '')
   const email = faker.internet.email().toLocaleLowerCase()
   const ddd = '11'  // Can adjust the DDD as needed
   const initialNumber = '9, 9, 8'
   // Generates the remaining eight digits randomly and never repeats
   let remainingNumbers = ''
   while (remainingNumbers.length < 6) {
      const digitRandom = Math.floor(Math.random() * 10).toString()
      if (!remainingNumbers.includes(digitRandom)) {
         remainingNumbers += digitRandom
      }
   }
   const cellphoneNumber = `${ddd}${initialNumber}${remainingNumbers}` // Concatenates DDD, starting number and remaining eight digits
   cy.clearAllCookies()
   cy.get(REGISTRATION_FORM.fullNameField).type(fullNameWithoutAccents)
   cy.get(REGISTRATION_FORM.userNameField).type(userName)
   cy.get(REGISTRATION_FORM.passwordField).type(password)
   cy.get(REGISTRATION_FORM.emailField).type(email)
   cy.get(REGISTRATION_FORM.birthDaySelect)
      .select('01').should('have.value', '01')
   cy.get(REGISTRATION_FORM.birthMonthSelect)
      .select('01').should('have.value', '01')
   cy.get(REGISTRATION_FORM.birthYearSelect)
      .select('2000').should('have.value', '2000')
   cy.get(REGISTRATION_FORM.cellPhoneField).type(cellphoneNumber)
   cy.get(REGISTRATION_FORM.currencyBrlField)
      .select('BRL').should('have.value', 'BRL')
   cy.get(REGISTRATION_FORM.createAaccountButton).click()

})
Cypress.Commands.add('playerLogin', ({ userName, password }) => {
   cy.clearAllCookies()
   cy.clearAllSessionStorage()
   cy.clearAllLocalStorage()
   cy.get(LOGIN.loginUsernameField).should('be.visible').type(userName)
   cy.get(LOGIN.loginPasswordField).should('be.visible').type(password)
   cy.wait(6000)
   cy.get(LOGIN.loginEnterButton).click()

})
Cypress.Commands.add('pixDeposit', () => {
   cy.get(DEPOSIT.pixOption).contains('Pix').click()
   cy.get(DEPOSIT.pixDeposit).click()
   cy.get(DEPOSIT.pixValueScreen).should('exist')
   cy.get(DEPOSIT.customValueField).type('20')
   cy.get(DEPOSIT.depositButton).click()

})
Cypress.Commands.add('depositAdditionalInformation', () => {
   const cpfGenerated = cpf.generate()
   cy.get(DEPOSIT_ADDITIONAL_INFORMATION.modalAdditionalInformation).should('have.text', 'Informações Adicionais')
   cy.get(DEPOSIT_ADDITIONAL_INFORMATION.cpfField).type(cpfGenerated)
   cy.get(DEPOSIT_ADDITIONAL_INFORMATION.acceptCookiesButton).click()
   cy.get(DEPOSIT_ADDITIONAL_INFORMATION.validateCpfNumberButton).scrollIntoView().click()
   cy.get(DEPOSIT_ADDITIONAL_INFORMATION.continueButton).click()
   cy.get(DEPOSIT_ADDITIONAL_INFORMATION.pixDepositInstructions, { timeout: 30000 } ).should('be.visible')

})
Cypress.Commands.add('playerLogOff', () => {
   cy.clearAllCookies()
   cy.get(LOGOFF.logOffButton).contains('Sair').click()

})
Cypress.Commands.add('backOfficeLogin', () => {
   cy.get(BO_LOGIN.loginUsernameField).type(BO_LOGIN.user)
   cy.get(BO_LOGIN.loginPasswordField).type(BO_LOGIN.password)
   cy.get(BO_LOGIN.loginEnterButton).click()

})
