import React from 'react';
import { Button, Input, Row } from 'react-materialize';
import { Formik } from 'formik';

class NewDishForm extends React.Component {
  handleSave = (values, { resetForm }) => {
    const { dishName } = values;
    const { onSave } = this.props;

    onSave(dishName);
    resetForm();
  }

  handleCancel = ({ resetForm }) => () => {
    resetForm();
    this.props.onCancel();
  }

  renderForm = ({ values, handleChange, handleSubmit, errors, resetForm }) => (
    <form onSubmit={handleSubmit}>
      <Input
        s={12} m={8} l={8}
        label="Dish Name"
        name="dishName"
        id="dishName"
        value={values.dishName}
        error={errors.dishName}
        onChange={handleChange}
        data-testid="newDishName" />
      <Button
        s={12} m={4} l={82}
        data-testid="saveNewDishButton"
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
          initialValues={{ dishName: '' }}
          onSubmit={this.handleSave}
          validate={this.validate}>
          {this.renderForm}
        </Formik>
      </Row>
    );
  }
}

export default NewDishForm;
