import React from 'react';
import { Button } from 'react-materialize';

class NewRestaurantForm extends React.Component {
  state = { inputText: '' };

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
  }

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <input
          type="text"
          value={inputText}
          onChange={this.handleTextChange}
          data-test="newRestaurantName" />
        <Button
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}>Save</Button>
      </div>
    );
  }
}

export default NewRestaurantForm;
