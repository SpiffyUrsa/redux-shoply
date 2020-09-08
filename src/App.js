import React from 'react';
import './App.css';
import ItemList from "./ItemList";
import Navbar from './Navbar';

/**
 * App --> {NavBar, ItemList --> Item}
 * 
 * Props:
 *  - none
 * 
 * state:
 *  - maintained by rootReducer
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Item /> */}
      <ItemList />
      {/* <ProductDetails />
        <ShoppingCart /> */}
    </div>
  );
}

export default App;
