describe('adding a restaurant', () => {
  it('display the restaurant in the list', () => {
    const restaurantName = "Sushi Place";
    cy.visit('http://localhost:1234');

    modalNotShownAtTheStart();
    modalCanBeCanceled();
    modalDisplaysValidationErrors();
    modalClearsOutValidationErrorWhenClosed();
    modalAllowsTypingRestaurant(restaurantName);
  });

  function modalNotShownAtTheStart() {
    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');
  }

  function modalCanBeCanceled() {
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="cancelModalButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');
  }

  function modalDisplaysValidationErrors() {
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should('be.visible');

    cy.get('[data-test="cancelModalButton"]')
      .click();
  }

  function modalClearsOutValidationErrorWhenClosed() {
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should('be.visible');

    cy.get('[data-test="cancelModalButton"]')
      .click();

    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should('not.be.visible');

    cy.get('[data-test="cancelModalButton"]')
      .click();
  }

  function modalAllowsTypingRestaurant(restaurantName) {
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    cy.contains(restaurantName);
  }
});
