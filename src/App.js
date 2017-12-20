import React, { Component } from 'react';
import './App.css';
import FruitStoreContainer from './components/fruit_store_container';
import store from './store.js';

class App extends Component {
  render() {
    return (
      <div className="fruit-store">
        <FruitStoreContainer store={store}/>
      </div>
    );
  }
}

export default App;
