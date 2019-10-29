import React from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

class RestaurantListPage extends React.Component {
  state = {
    restaurantNames: [],
  }

  handleSaveRestaurant = (newRestaurant) => {
    this.setState(state => ({
      restaurantNames: [
        ...state.restaurantNames,
        newRestaurant,
      ],
    }));
  }

  render() {
    const { restaurantNames } = this.state;
    return (
      <div>
        <button
          data-test="addRestaurantButton">Add Restaurant</button>
        <NewRestaurantForm onSave={this.handleSaveRestaurant} />
        <RestaurantList restaurantNames={restaurantNames} />
      </div>
    );
  }
}

export default RestaurantListPage;
