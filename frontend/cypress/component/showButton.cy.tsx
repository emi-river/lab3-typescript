import Actors from '../../src/components/Actors'
const button = 'listButton'
const text = 'List of Actors'

describe('Visa lista via knapp', () => {
  it('Visa lista på skådespelare', () => {
    cy.mount(<Actors />)
    cy.get('button').find(button).should('have.text', 'Show')
    cy.get('button').find(button).click()
    cy.get('ul').should('have.text', text)
  })
})
