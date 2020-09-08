import shopData from "./data.json";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const INITIAL_STATE = {
  cart: [],
  shopData: shopData
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cart: [...state.cart, action.payload]};
    case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(item => item.id !== action.payload);
      return {...state, card: filteredCart};
    default:
      return state;
  }
}

export default rootReducer;