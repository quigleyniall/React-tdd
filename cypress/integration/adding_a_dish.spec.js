describe('adding a dish', () => {
  it('displays a dish in the list', () => {
    const restaurantName="Sushi Place";
    const dishName = "Volcano Roll";

    cy.visit('http://localhost:1234');

    addRestaurant(restaurantName);
    goToRestaurantPage(restaurantName);
    modalNotShownAtTheStart();
    modalAllowsPassingDish(dishName);
  });

  function addRestaurant(restaurantName) {
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
  }

  function goToRestaurantPage(restaurantName) {
    cy.contains(restaurantName).click();
  }

  function modalNotShownAtTheStart() {
    cy.get('[data-testid="newDishModal"]').should('not.be.visible');
  }

  function modalAllowsPassingDish(dishName) {
    cy.get('[data-testid="addDishButton"]').click();
    cy.get('[data-testid="newDishName"]').type(dishName);
    cy.get('[data-testid="saveNewDishButton"]').click();
    cy.get('[data-testid="newDishName"]').should('not.be.visible');
    cy.contains(dishName);
  }
});
