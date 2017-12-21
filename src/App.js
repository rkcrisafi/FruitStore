import React, { Component } from 'react';
import './App.css';
import FruitStoreContainer from './components/fruit_store_container';
import store from './store.js';

class App extends Component {
  render() {
    return (
      <div className="fruit-store">
        <header className="header"><div className="header-fruit">Fruit</div></header>
        <FruitStoreContainer store={store}/>
      </div>
    );
  }
}

export default App;
