import React from 'react';
import './App.css';
import ItemList from "./ItemList";
import Navbar from './Navbar';
import { Route, Switch, Redirect } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import NotFound from "./NotFound";
import Cart from "./Cart";

/**
 * App --> {NavBar, ItemList --> Item}
 * 
 * Props:
 *  - none
 * 
 * state:
 *  - maintained by rootReducer
 * 
 */


 // CR: Make a component called Routes to put the Switch and below stuff in.
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ItemList />
        </Route>
        <Route exact path="/products/:id">
          <ItemDetails />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/notfound">
          <NotFound />
        </Route>
          <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
