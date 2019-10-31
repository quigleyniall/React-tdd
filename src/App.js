import React from 'react';
import { Col, Row } from 'react-materialize';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import RestaurantListPage from './RestaurantListPage';
import RestaurantDetailPage from './RestaurantDetailPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 l2">
            <Switch>
              <Route path="/restaurant/:name" component={RestaurantDetailPage} />
              <Route path="/" exact component={RestaurantListPage} />
            </Switch>
          </Col>
        </Row>
      </Router>
    );
  }
}

export default App;
