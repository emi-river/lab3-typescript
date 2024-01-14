describe('Get a random movie', () => {
  it('visits my site to get a random movie', () => {
    cy.visit('http://localhost:5173/')
    cy.get('nav').find('#randomMovie').click()
    cy.get('button').click()
    cy.get('h3')
      .invoke('text')
      .then((movie) => {
        cy.log(`Movie Title: ${movie}`)
      })
  })
})
