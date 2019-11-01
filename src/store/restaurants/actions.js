export const addRestaurant = "AddRestaurant";

const addRestaurantToStore = (payload) => ({
  type: addRestaurant,
  payload,
});

export { addRestaurantToStore };
