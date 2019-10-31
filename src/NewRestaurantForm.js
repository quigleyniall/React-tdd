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

  validate = (values) => {
    let errors = {};
    if (values.restaurantName === '') {
      errors.restaurantName = 'Cannot be blank';
    }
    return errors;
  }

  handleCancel = ({ resetForm }) => () => {
    resetForm();
    this.props.onCancel();
  }

  renderForm = ({ values, handleChange, handleSubmit, errors, resetForm }) => (
    <form onSubmit={handleSubmit}>
      <Input
        s={12} m={8} l={8}
        label="Restaurant Name"
        name="restaurantName"
        id="restaurantName"
        value={values.restaurantName}
        error={errors.restaurantName}
        onChange={handleChange}
        data-testid="newRestaurantName" />
      <Button
        s={12} m={4} l={82}
        data-testid="saveNewRestaurantButton"
        type="submit"
      >Save</Button>
      <Button
        waves="green"
        type="button"
        onClick={this.handleCancel({ resetForm })}
        data-testid="cancelModalButton"
        flat>
          Close
      </Button>
    </form>
  )

  render() {
    return (
      <Row>
        <Formik
          initialValues={{ restaurantName: '' }}
          onSubmit={this.handleSave}
          validate={this.validate}>
          {this.renderForm}
        </Formik>
      </Row>
    );
  }
}

export default NewRestaurantForm;
