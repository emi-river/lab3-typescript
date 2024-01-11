import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'
const button = 'listButton'
const text = 'List of Actors'

Given('Användaren är på Actor sidan och knappen visar Show.', () => {
  cy.visit('http://localhost:5173/actors')
  cy.get('button').find(button).should('have.text', 'Show')
})

When('Användaren klickar på knappen.', () => {
  cy.get('button').find(button).click()
})

Then('En lista på skådespelare visas', () => {
  cy.get('ul').should('have.text', text)
})
