describe('oneMovie', () => {
  it('Get info from one movie', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.movieList').first().click()
    cy.get('#selectedMovie')
      .invoke('text')
      .then((movie) => {
        cy.log(`Selected movie: ${movie}`)
      })
  })
})
