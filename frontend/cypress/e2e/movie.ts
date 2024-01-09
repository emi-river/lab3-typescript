import { When, Then, Given, Before } from '@badeball/cypress-cucumber-preprocessor'
import {faker} from '@faker-js/faker'
const genre = 'Comedy'
const img = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
const rating = '7'
const description = 'Movie Description'

const generatedWord = () => {
  const randomWord = faker.lorem.word()
  Cypress.env('randomWord', randomWord)

}

Before(() => {
cy.visit("http://localhost:5173/")
generatedWord()
})
Given("Användaren är på hemsidan och det finns 5 fält som användaren fyller i.",() => {
  cy.get('form').find('#name').type(Cypress.env('randomWord'))
  cy.get('form').find('#genre').type(genre)
  cy.get('form').find('#img').type(img)
  cy.get('form').find('#rating').type(rating)
  cy.get('form').find('#description').type(description)
})
When('Användaren har fyllt i fälten och lägger till en film.',() => {
 cy.get('form').find('#submit').click()
})
Then('Filmen ska visas på hemsidan.',() => {
  cy.get('.container').within(()=>{
    cy.get('.movieName').should('include.text', Cypress.env('randomWord'))
    cy.get('.genre').should('include.text', genre)
    cy.get('.img').should('include.text', img) //Fix this
    cy.get('.rating').should('include.text', '7')
    cy.get('.description').should('include.text', description)
  })

})
