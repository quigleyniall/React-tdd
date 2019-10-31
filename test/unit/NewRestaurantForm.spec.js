import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import NewRestaurantForm from '../../src/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let wrapper;

    beforeEach(() => {
      saveHandler = jest.fn();

      wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      wrapper
        .find('input[data-test="newRestaurantName"]')
        .simulate('change', {
          target: {
            name: 'restaurantName',
            value: 'Sushi Place',
          },
        });

      wrapper
        .find('button[data-test="saveNewRestaurantButton"]')
        .simulate('click');
    });

    it('calls the onSave handler', () => {
      window.setTimeout(() => {
        expect(saveHandler).toHaveBeenCalledWith('Sushi Place');
      }, 0);
    });

    it('clears the text field', () => {
      window.setTimeout(() => {
        expect(wrapper.find('input[data-test="newRestaurantName"]').props().value).toEqual('');
      }, 0);
    });
  });
});

