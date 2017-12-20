export const ADD_FRUIT = 'ADD_FRUIT';
export const REMOVE_FRUIT = 'REMOVE_FRUIT';
export const DELETE_FRUITS = 'DELETE_FRUITS';
export const EMPTY_CART = 'EMPTY_CART';
export const CONFIRM_PURCHASE = 'CONFIRM_PURCHASE';

export const addFruit = (fruit) => ({
  type: ADD_FRUIT,
  fruit
});

export const removeFruit = (fruit) => ({
  type: REMOVE_FRUIT,
  fruit
});

export const deleteFruits = (fruit) => ({
  type: DELETE_FRUITS,
  fruit
});

export const emptyCart = () => ({
  type: EMPTY_CART
});

export const confirmPurchase = () => ({
  type: CONFIRM_PURCHASE
});
