import React from 'react';
import { Link } from 'react-router-dom';
import { Collection, CollectionItem } from 'react-materialize';

const RestaurantList = ({ restaurantNames }) => (
  <Collection header="Restaurants">
    <RestaurantItems restaurantNames={restaurantNames} />
  </Collection>
);

const RestaurantItems = ({ restaurantNames }) => (
  restaurantNames.length === 0
    ? <NoRestaurantItems />
    : <SomeRestaurantItems restaurantNames={restaurantNames} />
);

const NoRestaurantItems = () => (
  <CollectionItem style={{ color: 'grey' }}>
    No Restaurants Added yet
  </CollectionItem>
);

const SomeRestaurantItems = ({ restaurantNames }) => (
  restaurantNames.map(restaurantName => (
    <CollectionItem key={restaurantName}>
      <Link to={`/restaurant/${restaurantName}`}>
        {restaurantName}
      </Link>
    </CollectionItem>
  ))
);

export default RestaurantList;
