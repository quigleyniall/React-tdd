import dishes from '../../../src/store/dishes/reducer';
import { addDish } from '../../../src/store/dishes/actions';

describe('dishes reducer', () => {
  describe('adds a dish', () => {
    it('add a dish for the specified restaurant', () => {
      const state = {};

      const restaurantName = 'Sushi Place';
      const dishName = 'Volcano Roll';

      const result = dishes(state, {
        type: addDish,
        restaurantName,
        dishName,
      });

      expect(result[restaurantName]).toEqual([dishName]);
    });
  });
});
