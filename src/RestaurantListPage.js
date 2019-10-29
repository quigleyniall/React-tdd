import React from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

class RestaurantListPage extends React.Component {
  state = {
    restaurantNames: [],
    showNewRestaurantForm: false,
  }

  handleSaveRestaurant = (newRestaurant) => {
    this.setState(state => ({
      restaurantNames: [
        ...state.restaurantNames,
        newRestaurant,
      ],
      showNewRestaurantForm: false,
    }));
  }

  handleShowNewResturantForm = () => {
    this.setState({ showNewRestaurantForm: true });
  }

  render() {
    const { restaurantNames, showNewRestaurantForm } = this.state;
    return (
      <div>
        <button
          data-test="addRestaurantButton"
          onClick={this.handleShowNewResturantForm}>Add Restaurant</button>
        { showNewRestaurantForm && <NewRestaurantForm onSave={this.handleSaveRestaurant} /> }
        <RestaurantList restaurantNames={restaurantNames} />
      </div>
    );
  }
}

export default RestaurantListPage;
