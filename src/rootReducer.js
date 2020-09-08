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
  const stateCopy = { ...state }

  //CR: Could use var to deal with the id, price being same values
  //TODO: remove the add/remove var renames

  switch (action.type) {
    case ADD_TO_CART: {
      let { id: addId, price: addValue } = action.payload
      if (stateCopy.cart[addId]) stateCopy.cart[addId]++
      else stateCopy.cart[addId] = 1

      stateCopy.value += addValue

      return stateCopy;
    }

    case REMOVE_FROM_CART: {
      let { id: removeId, price: removeValue } = action.payload
      if (stateCopy.cart[removeId]) {
        stateCopy.cart[removeId]--
        stateCopy.value -= removeValue
      }

      if (stateCopy.cart[removeId] === 0) delete stateCopy.cart[removeId]

      return stateCopy;
    }

    default:
      return state;
  }
}

export default rootReducer;