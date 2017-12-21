import React from 'react';

const CartItem = ({ props, fruit }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-first-raw">
        <img src={fruit.imgSrc} className="cart-item-image" width="75" height="100%"/>
        <button onClick={() => props.removeFruit(fruit.itemName)} className="remove-botton">-</button>
        <div className="cart-item-quantity">{fruit.numInCart}</div>
        <button onClick={() => props.addFruit(fruit.itemName)} className="add-botton">+</button>
      </div>
      <div className="cart-item-second-raw">
        <div className="price-per-item">@ ${fruit.price.toFixed(2)}each = ${(fruit.price * fruit.numInCart).toFixed(2)}</div>
        <button onClick={() => props.deleteFruits(fruit.itemName)} className="delete-fruit">Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
