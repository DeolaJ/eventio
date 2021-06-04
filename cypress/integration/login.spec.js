/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Logs user in', () => {
    cy.get('input#email').type('tonystark@strv.com');
    cy.get('input#password').type('ir0nL0ver');

    // Get Password field and type password
    cy.get('.login-button').click();
    // Should log user in and redirect to the Dashboard
    cy.url().should('include', '/dashboard');
  });
});

describe('Home (Mobile)', { viewportWidth: 360 }, () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Logs user in', () => {
    cy.get('input#email').type('tonystark@strv.com');
    cy.get('input#password').type('ir0nL0ver');

    // Get Password field and type password
    cy.get('.login-button').click();
    // Should log user in and redirect to the Dashboard
    cy.url().should('include', '/dashboard');
  });
});
