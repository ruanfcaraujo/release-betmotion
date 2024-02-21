/// <reference types="Cypress"/>
//import { faker } from "@faker-js/faker"
import { fakerPT_BR as faker } from '@faker-js/faker'
import { ACCOUNT_CREATED } from './constants'

export const userName = faker.internet.userName().toLocaleLowerCase()
export const password = faker.internet.password()

describe('register a new player account', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
    })
    it('new player register', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://bmsite-staging.salsaomni.com/br/new-register', { failOnStatusCode: false })
        cy.fillFormPlayer({ userName, password })
        cy.get(ACCOUNT_CREATED.accountCreatedSuccessfully, { timeout: 60000 })
        cy.get(ACCOUNT_CREATED.msgAccountCreatedSuccessfully)
            .should('have.text', 'Sua conta foi criada com sucesso!')
            .and('be.visible')

    })

})