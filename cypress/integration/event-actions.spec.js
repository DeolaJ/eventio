/// <reference types="cypress" />

describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/');

    // Log user in
  });

  it('Create event', () => {
    // Get create button
    // Click on create button
    // Get Input fields and fill in information
    // Get Submit button and click it
    // Redirects to Events Page
    // Assert that new Event is present
  });

  it('Delete Event', () => {
    // Click on one of the Event's List Item
    // Redirects to Event details page
    // Get Delete button and click it
    // Assert that Event is no longer present
  });

  it('Join Event', () => {
    // Click on one of the Event's List Items with a Join button
    // Event List Item button should have "Leave" text
    // Click on Event List Item
    // Redirects to Event details page
    // Assert that user is part of the attendees
  });

  it('Leave Event', () => {
    // Click on one of the Event's List Items with a Leave button
    // Event List Item button should have "Join" text
    // Click on Event List Item
    // Redirects to Event details page
    // Assert that user is no longer part of the attendees
  });
});

describe('Home (Mobile)', { viewportWidth: 360 }, () => {
  beforeEach(() => {
    cy.visit('/');

    // Log user in
  });

  it('Create event', () => {
    // Get create button
    // Click on create button
    // Get Input fields and fill in information
    // Get Submit button and click it
    // Redirects to Events Page
    // Assert that new Event is present
  });

  it('Delete Event', () => {
    // Click on one of the Event's List Item
    // Redirects to Event details page
    // Get Delete button and click it
    // Assert that Event is no longer present
  });

  it('Join Event', () => {
    // Click on one of the Event's List Items with a Join button
    // Event List Item button should have "Leave" text
    // Click on Event List Item
    // Redirects to Event details page
    // Assert that user is part of the attendees
  });

  it('Leave Event', () => {
    // Click on one of the Event's List Items with a Leave button
    // Event List Item button should have "Join" text
    // Click on Event List Item
    // Redirects to Event details page
    // Assert that user is no longer part of the attendees
  });
});
