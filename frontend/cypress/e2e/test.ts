import { When, Then, Given, Before } from '@badeball/cypress-cucumber-preprocessor'
import {faker} from '@faker-js/faker'
const randomWord = faker.lorem.word()
Before(() => {
cy.visit("http://localhost:5173/")
})
Given('Användaren fyller i fälten',() =>{
  cy.get('form').find('#name').type(randomWord)
  cy.get('form').find('#genre').type('Comedy')
  cy.get('form').find('#img').type('https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg')
  cy.get('form').find('#rating').type('7')
  cy.get('form').find('#description').type('Movie Description')
})
When('',() =>{
 cy.get('form').find('#submit').click()
})
Then('',() =>{
  cy.get('.container').within(()=>{
    cy.get('#name').should('have.text', randomWord)
    cy.get('#genre').should('have.text', 'Comedy')
    cy.get('#img').should('have.text', 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg')
    cy.get('#rating').should('have.text', '7')
    cy.get('#description').should('have.text', 'Movie Description')
  })

})
