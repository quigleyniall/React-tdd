import React from 'react';
import { Col, Row } from 'react-materialize';
import RestaurantListPage from './RestaurantListPage';

class App extends React.Component {
  render() {
    return (
      <Row>
        <Col s={12} m={10} l={8} offset="m1 l2">
          <RestaurantListPage />
        </Col>
      </Row>
    );
  }
}

export default App;
