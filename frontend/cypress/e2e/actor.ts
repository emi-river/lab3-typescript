import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'
const text = 'Actors and Actresses'

Given(
  'Användaren är på hemsidan och det finns en knapp List of Actors and Actresses.',
  () => {
    cy.visit('http://localhost:5173/')
  }
)

When('Användaren klickar på knappen.', () => {
  cy.get('nav').find('.link').click()
})

Then(
  'Användaren hamnar på en sida med en titel "Actors and Actresses".',
  () => {
    cy.get('h2').should('have.text', text)
  }
)
