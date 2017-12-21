import React from 'react';

const FruitStoreItem = ({ fruit, addToCart, cart }) => {
  return (
    <div className="fruit-store-item">
      <img src={fruit.imgSrc} className="fruit-store-item-image" width="250"/>
      <div className="fruit-store-item-name">{fruit.itemName[0].toUpperCase()+fruit.itemName.slice(1)}</div>
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
