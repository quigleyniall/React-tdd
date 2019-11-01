export const addDish = 'addDish';

const addDishToStore = (payload) => ({
  type: addDish,
  payload,
});

export { addDishToStore };
