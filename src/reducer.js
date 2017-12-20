import { ADD_FRUIT, REMOVE_FRUIT, DELETE_FRUITS, EMPTY_CART, CONFIRM_PURCHASE } from './actions';
import merge from 'lodash/merge';
const FRUITS = require('../store_items.json');


let defaultState = {};
FRUITS.forEach(fruit => {
  defaultState[fruit.itemName] = {
                                    "itemName": fruit.itemName,
                                    "imgSrc": fruit.imgSrc,
                                    "price": fruit.price,
                                    "quantityRemaining": fruit.quantityRemaining,
                                    "numInCart": 0
                                  };
});

let allFruits = FRUITS.map(fruit => {
  return fruit.itemName;
});


const reducer = (state = defaultState, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case ADD_FRUIT:
      if (state.fruitStore[action.fruit].quantityRemaining > newState.fruitStore[action.fruit].numInCart) {
        newState.cart[action.fruit].numInCart++;
      }
      return newState;
    case REMOVE_FRUIT:
      if (newState.fruitStore[action.fruit].numInCart > 1) {
        newState.fruitStore[action.fruit].numInCart--;
      }
      return newState;
    case DELETE_FRUITS:
      newState.fruitStore[action.fruit].numInCart = 0;
      return newState;
    case EMPTY_CART:
      allFruits.forEach(fruit => {
        newState.fruitStore[fruit].numInCart = 0;
      });
      return newState;
    case CONFIRM_PURCHASE:
      allFruits.forEach(fruit => {
        newState.fruitStore[fruit].quantityRemaining -= newState.fruitStore[fruit].numInCart;
        newState.fruitStore[fruit].numInCart = 0;
      });
      return newState;
    default:
      return state;
  }
};

export default reducer;
