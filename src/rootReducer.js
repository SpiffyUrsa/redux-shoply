import shopData from "./data.json";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

/**
 * State:
 *  - Cart (obj)
 *  - value (num)
 *  - shopData (obj)
 *  
 * Arguments: takes in state and action
 */
const INITIAL_STATE = {
  cart: {},
  value: 0,
  shopData: shopData.products
}

function rootReducer(state = INITIAL_STATE, action) {

  //CR: Could use var to deal with the id, price being same values

  switch (action.type) {
    case ADD_TO_CART: {
      let cartCopy = { ...state.cart }
      let { id, price } = action.payload

      if (cartCopy[id]) cartCopy[id]++
      else cartCopy[id] = 1

      let newValue = state.value + price;
      // CR: Good use case for a helper function that does this along with calculating value of items
      //in cart.
      newValue = parseFloat(newValue.toFixed(2));

      return { ...state, cart: cartCopy, value: newValue };
    }

    case REMOVE_FROM_CART: {
      let cartCopy = { ...state.cart }
      let { id, price } = action.payload
      let newValue = state.value;

      if (cartCopy[id]) {
        cartCopy[id]--
        newValue -= price
        newValue = parseFloat(newValue.toFixed(2));
      }

      if (cartCopy[id] === 0) delete cartCopy[id]

      return { ...state, cart: cartCopy, value: newValue };
    }

    default:
      return state;
  }
}

export default rootReducer;