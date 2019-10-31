describe('adding a restaurant', () => {
  it('display the restaurant in the list', () => {
    const restaurantName = "Sushi Place";
    cy.visit('http://localhost:1234');

    // modal not shown at start
    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    // modal can be canceled
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="addRestaurantModal"] button.modal-close')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    // type restaurant name in modal
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    // cy.focused().should('have.attr', 'data-test', 'newRestaurantName');

    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    cy.contains(restaurantName);
  });
});
