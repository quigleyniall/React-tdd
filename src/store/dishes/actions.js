export const addDish = 'addDish';

const addDishToStore = (restaurantName, dishName) => ({
  type: addDish,
  restaurantName,
  dishName,
});

export { addDishToStore };
