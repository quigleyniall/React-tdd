import { addRestaurant } from './actions';

const initialState = [
  'Burger King',
];

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case addRestaurant:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default restaurants;
