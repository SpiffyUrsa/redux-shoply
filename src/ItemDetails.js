import React from "react";
import Item from "./Item";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

/**DOCSTRINGS */

function ItemDetails() {
  const { id } = useParams();
  const shopData = useSelector(state => state.shopData, shallowEqual);

  if (shopData[id] === undefined) {
    return <Redirect to="/notfound" />
  }

  const { name, price, description, image_url } = shopData[id];

  return (
    <div className="ItemDetails">
      <Item 
        id={id} 
        name={name} 
        price={price} 
        description={description} 
        image_url={image_url}
        showDetails={true} 
      />
    </div>
  )
}

export default ItemDetails;