describe('Examples spec', () => {
  beforeEach(() => {
    cy.visit('/nl')
  })

  it('Multi page testing', () => {
    cy.get('[data-test="language-button"]').click()
    cy.location('pathname').should('equal', '/en')
  })
})
