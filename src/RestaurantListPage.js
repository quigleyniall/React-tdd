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
    // eslint-disable-next-line no-undef
    $('#addRestaurantModal').modal('close');
  }

  handleShowNewResturantForm = () => {
    this.setState({ showNewRestaurantForm: true });
  }

  onCancel = () => {
    // eslint-disable-next-line no-undef
    $('#addRestaurantModal').modal('close');
  }

  render() {
    const { restaurantNames, showNewRestaurantForm } = this.state;
    return (
      <div>
        <Modal
          header="New Restaurant"
          data-testid="addRestaurantModal"
          id="addRestaurantModal"
          actions={[]}
          trigger={
            <Button
              data-testid="addRestaurantButton">
                Add Restaurant
            </Button>}>
          <NewRestaurantForm
            onSave={this.handleSaveRestaurant}
            onCancel={this.onCancel}
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
