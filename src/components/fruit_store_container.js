import { connect } from 'react-redux';
import FruitStore from './fruit_store';
import { addFruit, removeFruit, deleteFruits, emptyCart, confirmPurchase } from '../actions.js';

const mapStateToProps = state => ({
  fruitStore: Object.keys(state.fruitStore).map(fruit => state[fruit])
});

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
