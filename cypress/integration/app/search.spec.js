describe('Search form ', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('focusus on the input field', () => {
    cy.focused().should('have.class', 'search-input');
  });

  it('accepts input', () => {
    cy.get('.search-input')
      .type('Rock')
      .should('have.value', 'Rock');
  });

  context('form submit', () => {
    it('enters text to search by <enter> press', () => {
      cy.get('.search-input')
        .type('Rock')
        .type('{enter}');
    });

    it('enters text to search by pressing submit button', () => {
      cy.get('.search-input').type('Soul');
      cy.get('.button-submit').click();
    });
  });
});
