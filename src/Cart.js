import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Item from "./Item";

/** Cart: Shows the items in the cart.
 * 
 * State:
 *  cart: An object with items in the cart and their quantity like {id: 2, id2: 3, ...}
 * shopData: An object with data on each product like {id: {data}, id2: {data2}, ...}
 * 
 * App -> Cart -> Item
 * 
 */

function Cart() {
  const {cart, shopData} = useSelector(state => ({
    cart: state.cart,
    shopData: state.shopData
  }), shallowEqual)

  const cartItems = [];
  // CR: Make a helper function that will take an array of objects and maps over them.
  for (let key in cart) {

    const { name, price, description, image_url } = shopData[key];
    const numOfItem = cart[key];

    const cartItem = (
      <li key={key} className="row">
        <Item
          id={key}
          name={name}
          price={price}
          description={description}
          image_url={image_url}
          showDetails={false}
          key={key}
          className="col-10 float-left"
        />
        <h3 className="col-2 float-right container">Qty: {numOfItem}</h3>
      </li>
    );
    cartItems.push(cartItem);
  }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ol>
        {cartItems}
      </ol>
    </div>
  )
}

export default Cart;