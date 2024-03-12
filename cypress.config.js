const { defineConfig } = require("cypress")
const { marge } = require("mochawesome-report-generator")

module.exports = defineConfig({
  // Configurações Cypress aqui...
  pageLoadTimeout: 90000,
  // Configuração do relatório
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // Diretório onde os relatórios serão salvos
    overwrite: false, // Não sobrescrever relatórios existentes
    html: true, // Gerar relatórios HTML
    json: true // Gerar relatórios JSON
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})

