/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Logs user in', () => {
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

  it('Logs user in', () => {
    // Get Input and type username
    // Get Password field and type password
    // Click Login Button
    // Should log user in and redirect to the Dashboard
  });
});
