import Actors from '../../src/components/Actors'
const button = '#showButton'
const text = ['Meryl Streep', 'Johnny Depp', 'Anne Hathaway', 'Julie Andrews']

describe('Visa lista via knapp', () => {
  it('Visa lista på skådespelare', () => {
    cy.mount(<Actors />)
    cy.get(button).should('have.text', 'Show List!')
    cy.get(button).click()
    cy.get('li').each((li, index) => {
      cy.wrap(li).should('have.text', text[index])
    })
  })
})
