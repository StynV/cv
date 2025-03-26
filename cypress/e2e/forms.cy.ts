describe('Forms spec', () => {
  beforeEach(() => {
    cy.visit('/nl/react-19')
  })

  it('Test form with actions', () => {
    cy.contains(/Naam van het bedrijf:/i)

    cy.contains(/Test-bedrijf	Gesolliciteerd zonder reactie/i).should(
      'not.exist'
    )
    cy.get('[data-test="form-action"]').find('input').as('form-input')
    cy.get('@form-input').type('Test-bedrijf')
    cy.get('[data-test="form-submit"]').click()

    cy.contains(/Test-bedrijf/i)
    cy.contains(/Gesolliciteerd zonder reactie/i)
  })
})
