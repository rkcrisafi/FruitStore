import { connect } from 'react-redux';
import FruitStore from './fruit_store';
import { addFruit, removeFruit, deleteFruits, emptyCart, confirmPurchase } from '../actions.js';

const mapStateToProps = state => {
  return {
    fruitStore: Object.keys(state.fruitStore).map(fruit => state.fruitStore[fruit]),
    cart: state.cart.map(fruit => state.fruitStore[fruit]),
    fruitInCart: state.cart
  };
};

const mapDispatchProps = dispatch => ({
  addFruit: fruit => dispatch(addFruit(fruit)),
  removeFruit: fruit => dispatch(removeFruit(fruit)),
  deleteFruits: fruit => dispatch(deleteFruits(fruit)),
  emptyCart: () => dispatch(emptyCart()),
  confirmPurchase: () => dispatch(confirmPurchase())
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(FruitStore);
