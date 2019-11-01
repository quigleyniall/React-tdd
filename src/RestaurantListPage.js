import React from 'react';
import { Button, Row, Col, Modal } from 'react-materialize';
import { connect } from 'react-redux';
import { addRestaurantToStore } from './store/restaurants/actions';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

class RestaurantListPage extends React.Component {
  handleSaveRestaurant = (newRestaurant) => {
    const { addRestaurantToStore } = this.props;
    addRestaurantToStore(newRestaurant);
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
    const { restaurants } = this.props;
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
          <RestaurantList restaurantNames={restaurants} />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants });

export default connect(mapStateToProps, { addRestaurantToStore })(RestaurantListPage);
