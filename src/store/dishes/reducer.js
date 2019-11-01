import { addDish } from './actions';

const initialState = [
  'Whooper',
];

const dishes = (state = initialState, action) => {
  switch (action.type) {
    case addDish:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default dishes;
