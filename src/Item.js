import React from "react";
import { useDispatch } from 'react-redux'
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import { Link } from "react-router-dom";


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
function Item({ id, name, price, description, image_url, showDetails }) {

  const dispatch = useDispatch();


  // TODO: USE ACTION CREATORS IF YOU HAVE THEM. Pass dispatch the action creator which accepts param
  // of the id and price to pass in.
  //Add item to state
  function handleAdd() {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, price }
    })
  }

  //Remove  item from state
  function handleRemove() {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { id, price }
    })
  }

// CR: Simplify the repetition. 

  if (showDetails) {
    return (
      <div className="Item">
        <h3>{name}</h3>
        <img src={image_url} alt={name} className="img-fluid" style={{ width: '200px' }} />
        <h3>{price}</h3>
        <h3>{description}</h3>
        <button onClick={handleAdd}>Add To Cart</button>
        <button onClick={handleRemove}>Remove From Cart</button>
      </div>

    )
  }
  return (
    <div className="Item">
      <Link to={`/products/${id}`}>
        <h3>{name}</h3>
        <img src={image_url} alt={name} className="img-fluid" style={{ width: '200px' }} />
        <h3>{price}</h3>
      </Link>
      <button onClick={handleAdd}>Add To Cart</button>
      <button onClick={handleRemove}>Remove From Cart</button>
    </div>
  )
}

export default Item;