import React from 'react';
import './App.css';
import ItemList  from "./ItemList";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> Will have the shopping cart icon and  the total price so far. */}
      {/* <Item /> */}
      <ItemList />
      {/* <ProductDetails />
      <ShoppingCart /> */}
    </div>
  );
}

export default App;
