import React from 'react';
import { Link } from 'react-router-dom';
import { Collection, CollectionItem } from 'react-materialize';

const DishList = ({ dishNames }) => (
  <Collection header="Dishes">
    <DishItems dishNames={dishNames} />
  </Collection>
);

const DishItems = ({ dishNames }) => (
  dishNames.length === 0
    ? <NoDishItems />
    : <SomeDishItems dishNames={dishNames} />
);

const NoDishItems = () => (
  <CollectionItem style={{ color: 'grey' }}>
    No Dishs Added yet
  </CollectionItem>
);

const SomeDishItems = ({ dishNames }) => (
  dishNames.map(dishName => (
    <CollectionItem key={dishName}>
      <Link to={`/dish/${dishName}`}>
        {dishName}
      </Link>
    </CollectionItem>
  ))
);

export default DishList;
