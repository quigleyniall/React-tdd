import React from 'react';
import { Button, Row, Col } from 'react-materialize';
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
        <Row>
          <Button
            data-test="addRestaurantButton"
            onClick={this.handleShowNewResturantForm}>Add Restaurant</Button>
          { showNewRestaurantForm && <NewRestaurantForm onSave={this.handleSaveRestaurant} /> }
        </Row>
        <Row>
          <RestaurantList restaurantNames={restaurantNames} />
        </Row>
      </div>
    );
  }
}

export default RestaurantListPage;
