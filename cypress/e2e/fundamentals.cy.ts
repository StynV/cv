describe('Fundamentals spec', () => {
  beforeEach(() => {
    cy.visit('/nl')
  })

  it('Contains correct header text', () => {
    cy.get('[data-test="header-title"]').contains(/Styn Vercauteren/i)
    cy.get('[data-test="header-title"]').should(
      'contain.text',
      'Styn Vercauteren'
    )
  })

  it('Item looks correct', () => {
    cy.contains(/Hi!/i).should('not.exist')
    cy.get('[data-test="language-button"]').click()
    cy.contains(/Hi!/i).should('be.visible')
  })
})
