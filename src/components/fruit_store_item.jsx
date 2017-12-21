import React from 'react';

const FruitStoreItem = ({ fruit, addToCart, cart }) => {
  let preps = ["with", "a", "and"];
  let name = fruit.itemName.split(" ");
  name = name.map(word => {
    return (!preps.includes(word) ? word[0].toUpperCase() + word.slice(1) : word)
  });
  name = name.join(" ");
  return (
    <div className="fruit-store-item" width="250">
      <div className="fruit-store-item-image-box">
        <img src={fruit.imgSrc} className="fruit-store-item-image"/>
      </div>
      <div className="fruit-store-item-name">{name}</div>
      <div className="fruit-store-price-quantity">
        <div className="fruit-store-price">${fruit.price.toFixed(2)}</div>
        <div className="fruit-store-quantity">{fruit.quantityRemaining} In Stock</div>
      </div>
      {!cart.includes(fruit.itemName) ?
        <button onClick={() => addToCart(fruit.itemName)} className="add-to-cart-item">Add To Cart</button> :
        <button className="add-to-cart-item">Add To Cart</button>
        }
    </div>
  )
}

export default FruitStoreItem;
