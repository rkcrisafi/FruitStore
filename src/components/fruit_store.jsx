import React from 'react';
import FruitStoreItem from './fruit_store_item';
import CartItem from './cart_item';

const FruitStore = (props) => {
  return (
    <div className="fruit-store-index">
      <ul>
        {
          props.fruitStore.map((fruit, idx) => {
            return <FruitStoreItem key={idx} fruit={fruit} addToCart={props.addFruit}/>;
          })
        }
      </ul>
      <ul>
        {
          props.fruitStore.map((fruit, idx) => {
            return <CartItem key={idx} props={props} />;
          })
        }
      </ul>
    </div>
  );
};

export default FruitStore;
