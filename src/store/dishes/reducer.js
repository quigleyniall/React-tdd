import { addDish } from './actions';

const dishes = (state = {}, action) => {
  switch (action.type) {
    case addDish:
      const { restaurantName, dishName } = action;
      return {
        ...state,
        [restaurantName]: [
          dishName,
          ...(state[restaurantName] || []),
        ],
      };
    default:
      return state;
  }
};

export default dishes;
