import React from 'react';
import { Button, Input, Row } from 'react-materialize';

class NewRestaurantForm extends React.Component {
  state = { inputText: '' };

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
    this.setState({ inputText: '' });
  }

  render() {
    const { inputText } = this.state;
    return (
      <Row>
        <Input
          s={12} m={8} l={8}
          label="Restaurant Name"
          value={inputText}
          onChange={this.handleTextChange}
          data-test="newRestaurantName" />
        <Button
          s={12} m={4} l={82}
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}>Save</Button>
      </Row>
    );
  }
}

export default NewRestaurantForm;
