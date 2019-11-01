import React from 'react';
import { Button, Modal, Row } from 'react-materialize';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addDishToStore } from './store/dishes/actions';
import NewDishForm from './NewDishForm';
import DishList from './DishList';

class RestaurantDetailPage extends React.Component {
  // componentDidMount() {
  //   // const { navigation } = this.props;
  //   console.log(this.props.match.params.name);
  //   const { dishes } = this.props;
  //   console.log(dishes)
  // }
  handleSaveDish = (newDish) => {
    const { addDishToStore } = this.props;
    const restaurantName = this.props.match.params.name;
    // const restaurantName = navigation
    addDishToStore(restaurantName, newDish);
    // eslint-disable-next-line no-undef
    $('#addDishModal').modal('close');
  }

  handleClose = () => {
    // eslint-disable-next-line no-undef
    $('#addDishModal').modal('close');
  }

  render() {
    const { dishes } = this.props;
    const restaurantName = this.props.match.params.name;
    return (
      <div>
        <Link
          to="/"
          data-testid="backButton">Back</Link>
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
          <DishList dishNames={dishes} restaurantName={restaurantName} />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ dishes }) => ({ dishes });

export default connect(mapStateToProps, { addDishToStore })(RestaurantDetailPage);
