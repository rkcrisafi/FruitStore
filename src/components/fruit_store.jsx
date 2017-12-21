import React from 'react';
import FruitStoreItem from './fruit_store_item';
import CartItem from './cart_item';

const FruitStore = (props) => {
  let total = props.cart.reduce((total, fruit) => {
    return total + fruit.price * fruit.numInCart;
  }, 0);
  let numOfItems = props.fruitInCart.length;
  return (
    <div className="fruit-store-index">
      <ul className="fruit-store-items">
        {
          props.fruitStore.map((fruit, idx) => {
            return <FruitStoreItem key={idx} fruit={fruit} addToCart={props.addFruit} cart={props.fruitInCart}/>;
          })
        }
      </ul>
      <div className="cart-index">
        <div className="cart-name">Shopping Cart</div>
        <div className="cart-item-number">{numOfItems} { numOfItems === 1 ? "item" : "items" }</div>
        <ul className="cart-items">
          {
            props.cart.map((fruit, idx) => {
              return <CartItem key={idx} props={props} fruit={fruit} />;
            })
          }
        </ul>
        <div className="cart-index-bottom">
          <div className="cart-total">Total: ${total.toFixed(2)}</div>
          <button onClick={() => props.emptyCart()}>Empty Cart</button>
          <button onClick={() => props.confirmPurchase()}>Confirm Purchase</button>
      </div>
      </div>

    </div>
  );
};

export default FruitStore;
