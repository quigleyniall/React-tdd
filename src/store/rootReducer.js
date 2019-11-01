import { combineReducers } from 'redux';
import restaurants from './restaurants/reducer';
import dishes from './dishes/reducer';

const rootReducer = combineReducers({
  restaurants,
  dishes,
});

export default rootReducer;
