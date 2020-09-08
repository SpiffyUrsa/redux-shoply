import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Item from "./Item";

/**
 * Renders the list of items
 * 
 * App --> {NavBar, ItemList --> Item}
 * 
 * Props:
 *  - none
 * 
 * State:
 *  - maintained by rootReducer
 * 
 */
function ItemList() {
  const shopData = useSelector(state => state.shopData, shallowEqual);

  //For each item in ShopData, create card with Item detail
  const itemDisplay= []
  for (let key in shopData){
    const { name, price, description, image_url } = shopData[key]
    itemDisplay.push(<Item
      id={key}
      name={name}
      price={price}
      description={description}
      image_url={image_url}
      key={key}
      />
    )
  }

  return (
    <div className="ItemList">
      {itemDisplay}
    </div>
  )
}

export default ItemList;