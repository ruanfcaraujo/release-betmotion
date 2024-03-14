/// <reference types="Cypress"/>

import { VERTICALS_MENU } from "./constants"

describe('navigate on the verticals with a new player', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
    })
    it('must navigate on the verticals', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://bmsite-staging.salsaomni.com/br/', { failOnStatusCode: false })
        cy.get(VERTICALS_MENU.verticalMain).should('contain.text', 'Aposta esportiva', 'Slot', 'Cassino', 'Bingo')
        cy.get(VERTICALS_MENU.verticalMain).contains('Aposta esportiva').click()
        cy.url().should('eq', 'https://bmsite-staging.salsaomni.com/br/aposta-esportiva/cavalo2')
        cy.get(VERTICALS_MENU.verticalMain).contains('SLOT').click()
        cy.url().should('eq', 'https://bmsite-staging.salsaomni.com/br/slots-online/teste_jeff_acum')
        cy.get(VERTICALS_MENU.verticalMain).contains('CASSINO').click()
        cy.url().should('eq', 'https://bmsite-staging.salsaomni.com/br/cassino-online/betgamestv-tv')
        cy.get(VERTICALS_MENU.verticalMain).contains('BINGO').click()
        cy.url().should('eq', 'https://bmsite-staging.salsaomni.com/br/bingo-online/keno')
        cy.get(VERTICALS_MENU.verticalMain).contains('PROMOÇÕES').click()
        cy.url().should('eq', 'https://bmsite-staging.salsaomni.com/br/promocoes/bonus-de-boas-vindas')


    })
   
})