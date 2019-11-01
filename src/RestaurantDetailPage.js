import React from 'react';
import { Button, Modal, Row } from 'react-materialize';
import NewDishForm from './NewDishForm';
import DishList from './DishList';

class RestaurantDetailPage extends React.Component {
  state = {
    dishNames: [],
  }

  handleSaveDish = (newDish) => {
    this.setState(state => ({
      dishNames: [
        ...state.dishNames,
        newDish,
      ],
      showNewRestaurantForm: false,
    }));
    // eslint-disable-next-line no-undef
    $('#addDishModal').modal('close');
  }

  handleClose = () => {
    // eslint-disable-next-line no-undef
    $('#addDishModal').modal('close');
  }

  render() {
    const { dishNames } = this.state;
    return (
      <div>
        <Modal
          header="New Dish"
          data-testid="addDishModal"
          id="addDishModal"
          actions={[]}
          trigger={
            <Button
              data-testid="addDishButton">
                Add Dish
            </Button>}>
          <NewDishForm
            onCancel={this.handleClose}
            onSave={this.handleSaveDish} />
        </Modal>
        <Row>
          <DishList dishNames={dishNames} />
        </Row>
      </div>
    );
  }
}

export default RestaurantDetailPage;
