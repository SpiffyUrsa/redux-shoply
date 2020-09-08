import React from 'react'
import { useSelector, shallowEqual } from "react-redux";
import { NavLink } from 'react-router-dom'


/**
 * App --> {NavBar, ItemList --> Item}
 * 
 * Props:
 *  - none
 * 
 * state:
 *  - maintained by rootReducer
 */
//CR: consider removing the logic out of the navbar
function Navbar() {

  const cart = useSelector(state => state.cart, shallowEqual);

  //Calculate total count of items in cart
  const itemNumber = Object.values(cart).reduce((acc, curr) => acc + curr, 0)

  //Calculate total price of items in cart
  const value = useSelector(state => state.value, shallowEqual);

  return (
    //TODO: Add in links
    <nav>
      <NavLink exact to=''> Shoply </NavLink>
      <NavLink exact to=''> Cart: ${value} ({itemNumber}) </NavLink>
    </nav>
  )
}

export default Navbar