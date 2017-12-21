import React from 'react';
import FruitStoreItem from './fruit_store_item';
import CartItem from './cart_item';

const FruitStore = (props) => {
  let total = props.cart.reduce((total, fruit) => {
    return total + fruit.price * fruit.numInCart;
  }, 0);
  return (
    <div className="fruit-store-index">
      <ul>
        {
          props.fruitStore.map((fruit, idx) => {
            return <FruitStoreItem key={idx} fruit={fruit} addToCart={props.addFruit} cart={props.fruitInCart}/>;
          })
        }
      </ul>
      <ul>
        {
          props.cart.map((fruit, idx) => {
            return <CartItem key={idx} props={props} fruit={fruit} />;
          })
        }
      </ul>
      <div className="cart-total">Total: ${total}</div>
      <button onClick={() => props.emptyCart()}>Empty Cart</button>
    </div>
  );
};

export default FruitStore;
