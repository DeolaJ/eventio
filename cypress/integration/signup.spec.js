/// <reference types="cypress" />

describe('Home (Desktop)', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Signs up user', () => {
    // Get Input and type username
    // Get Password field and type password
    // Click Login Button
    // Should log user in and redirect to the Dashboard
  });
});

describe('Home (Mobile)', { viewportWidth: 360 }, () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Signs up user', () => {
    // Get Input and type username
    // Get Password field and type password
    // Click Login Button
    // Should log user in and redirect to the Dashboard
  });
});
