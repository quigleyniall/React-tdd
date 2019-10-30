import React from 'react';
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
      {restaurantName}
    </CollectionItem>
  ))
);

export default RestaurantList;
