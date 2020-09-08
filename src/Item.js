import React from "react";
import {useDispatch} from 'react-redux'
import {ADD_TO_CART, REMOVE_FROM_CART} from "./actionTypes";


/**
 * Renders an item and handles relationship with rootReducer State
 * 
 * App --> {NavBar, ItemList --> Item}
 * 
 * Props:
 *  - Item detail
 * 
 * State:
 *  - maintained by rootReducer
 * 
 */
function Item({id, name, price, description, image_url}) {

  const dispatch = useDispatch();

  //Add item to state
  function handleAdd(){
    dispatch({
      type: ADD_TO_CART,
      payload: {id, price}
    })
  }

  //Remove  item from state
  function handleRemove(){
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {id, price}
    })
  }

  return (
    <div className="Item">
      <h3>{name}</h3>
      <img src={image_url} alt={name} className="img-fluid" style={{width:'200px'}}/>
      <p>{description}</p>
      <h3>{price}</h3>
      <button onClick={handleAdd}>Add To Cart</button>
      <button onClick={handleRemove}>Remove From Cart</button>
    </div>
  )
}

export default Item;