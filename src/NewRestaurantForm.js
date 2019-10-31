import React from 'react';
import { Button, Input, Row } from 'react-materialize';
import { Formik } from 'formik';

class NewRestaurantForm extends React.Component {
  handleSave = (values, { resetForm }) => {
    const { restaurantName } = values;
    const { onSave } = this.props;

    onSave(restaurantName);
    resetForm();
  }

  render() {
    return (
      <Row>
        <Formik
          initialValues={{ restaurantName: '' }}
          onSubmit={this.handleSave}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Input
                s={12} m={8} l={8}
                label="Restaurant Name"
                name="restaurantName"
                value={values.restaurantName}
                onChange={handleChange}
                data-test="newRestaurantName" />
              <Button
                s={12} m={4} l={82}
                data-test="saveNewRestaurantButton"
              >Save</Button>
            </form>
          )}
        </Formik>
      </Row>
    );
  }
}

export default NewRestaurantForm;
