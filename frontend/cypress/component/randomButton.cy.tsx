import Random from '../../src/components/Random'
const click = '#randomButton'
const container = '.randomMovie'
const textElement = 'h3'
const repeat = 3
//Works locally in cypress but not in github actions?
describe('randomButton.cy.jsx', () => {
  it('Get 3 random movies', () => {
    cy.mount(<Random />)
    cy.wait(2000)
    for (let index = 0; index < repeat; index++) {
      cy.get(click).click()
      cy.get(container)
        .find(textElement)
        .invoke('text')
        .then((movie) => {
          cy.log(`Movie Title: ${movie}`)
        })
    }
  })
})
