/// <reference types="Cypress"/>
import { LOGIN } from './constants'
import { userName, password } from './@1newPlayerRegister.cy'

describe('login and logoff with registered credentials', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
    })
    it('must login with registered credentials', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://bmsite-staging.salsaomni.com/br/', { failOnStatusCode: false })
        cy.get(LOGIN.toEnterButton).click()
        cy.playerLogin({ userName, password })
        cy.get(LOGIN.playerSuccessfullyAuthenticated).contains(userName)
        

    })
    it('must logoff with registered credentials', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://bmsite-staging.salsaomni.com/br/', { failOnStatusCode: false })
        cy.get(LOGIN.toEnterButton).click()
        cy.playerLogin({ userName, password })
        cy.get(LOGIN.playerSuccessfullyAuthenticated).contains(userName)
        cy.get(LOGIN.playerSuccessfullyAuthenticated).click()
        cy.playerLogOff()
        cy.get(LOGIN.toEnterButton).should('be.visible')

    })


})