import Random from '../../src/components/Random'
const click = '#randomButton'
const container = '.randomMovie'
const textElement = 'h3'
const repeat = 3

describe('randomButton.cy.jsx', () => {
  it('Get 3 random movies', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '/movies'
      },
      {
        body: [
          {
            name: 'Shrek'
          },
          {
            name: 'Coco'
          },
          {
            name: 'Spider-Man'
          },
          {
            name: 'Rat Race'
          },
          {
            name: 'The Lion King'
          },
          {
            name: 'Night at the Museum'
          },
          {
            name: 'The Incredibles'
          },
          {
            name: 'Footloose'
          },
          {
            name: 'Elemental'
          },
          {
            name: 'Luca'
          },
          {
            name: 'Encanto'
          },
          {
            name: 'Free Guy'
          }
        ]
      }
    )
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
