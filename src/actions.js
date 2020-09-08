import {ADD_TO_CART, REMOVE_FROM_CART} from "./actionTypes";

export function add() {
  return {
    type: ADD_TO_CART
  };
}

export function remove() {
  return {
    type: REMOVE_FROM_CART
  };
}