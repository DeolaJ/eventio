/// <reference types="cypress" />

describe('Home (Desktop)', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('Signs up user', () => {
    // Get Input and type first and last names
    cy.get('input#firstName').type('Adeola');
    cy.get('input#lastName').type('Adeyemo');

    // Change this email to avoid User.exists error
    cy.get('input#email').type('adeola@dm.com');
    cy.get('input#password').type('ddddd');
    cy.get('input#passwordrepeat').type('ddddd');

    // Get Password field and type password
    cy.get('.signup-button').click();
    // Should sign up user, log user in, then redirect to the Dashboard
    cy.url().should('include', '/dashboard');
  });
});
