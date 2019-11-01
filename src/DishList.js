import React from 'react';
import { Link } from 'react-router-dom';
import { Collection, CollectionItem } from 'react-materialize';

const DishList = ({ dishNames, restaurantName }) => (
  <Collection header="Dishes">
    <DishItems dishNames={dishNames} restaurantName={restaurantName} />
  </Collection>
);

const DishItems = ({ dishNames, restaurantName }) => (
  dishNames[restaurantName] && dishNames[restaurantName].length > 0
    ? <SomeDishItems dishNames={dishNames} restaurantName={restaurantName} />
    : <NoDishItems />
);

const NoDishItems = () => (
  <CollectionItem style={{ color: 'grey' }}>
    No Dishs Added yet
  </CollectionItem>
);

const SomeDishItems = ({ dishNames, restaurantName }) => (
  dishNames[restaurantName].map(dishName => (
    <CollectionItem key={dishName}>
      <Link to={`/dish/${dishName}`}>
        {dishName}
      </Link>
    </CollectionItem>
  ))
);

export default DishList;
