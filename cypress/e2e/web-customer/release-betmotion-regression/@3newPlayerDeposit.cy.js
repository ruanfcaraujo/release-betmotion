/// <reference types="Cypress"/>
import { DEPOSIT, LOGIN } from './constants'
import { userName, password } from './@1newPlayerRegister.cy'

describe('deposit with the new player account by pix', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
    })
    it('must deposit by pix with a new account', () => {
        //const depositRequestURL = 'https://bmapi-staging.salsaomni.com/deposit/request.do?language=BR&platform=DESKTOP';
        cy.viewport(1920, 1080)
        cy.visit('https://bmsite-staging.salsaomni.com/br/', { failOnStatusCode: false })
        cy.get(LOGIN.toEnterButton).click()
        cy.playerLogin({ userName, password })
        cy.get(LOGIN.playerSuccessfullyAuthenticated).click()
        cy.get(DEPOSIT.depositOption).contains('Depósito').click()
        cy.get(DEPOSIT.depositScreen, { timeout: 30000 }).contains('Faça seu primeiro depósito e comece a apostar!')
        cy.pixDeposit()
        cy.depositAdditionalInformation()
        cy.get('.h3').should('be.visible').contains('PIX - Siga as Intruções')
        //cy.get('img.qr-code[src="https://bmsite-staging.salsaomni.com/assets/images/deposit/methods/PIX/QR_PIX_CHAVE_V6.png"]', { timeout: 30000 }).should('exist')




    })
})
