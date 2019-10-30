import React from 'react';
import { Button, Row, Col, Modal } from 'react-materialize';
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
        <Modal
          header="New Restaurant"
          trigger={
            <Button
              data-test="addRestaurantButton">
                Add Restaurant
            </Button>}>
          <NewRestaurantForm
            onSave={this.handleSaveRestaurant}
          />
        </Modal>
        <Row>
          <RestaurantList restaurantNames={restaurantNames} />
        </Row>
      </div>
    );
  }
}

export default RestaurantListPage;
