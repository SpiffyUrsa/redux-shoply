import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Item from "./Item";

function ItemList() {
  // Iterate over the shopData.products. For each product make an item component, passing down the
  // values inside of the product data. 
  const shopData = useSelector(state => state.shopData, shallowEqual);
  const productEntries = Object.entries(shopData.products);

  const itemDisplay = productEntries.map(entry => {
    const itemId = entry[0];
    const { name, price, description, image_url } = entry[1];
    return <Item
      id={itemId}
      name={name}
      price={price}
      description={description}
      image_url={image_url}
      key={itemId}
    />
  });

  return (
    <div className="ItemList">
      {itemDisplay}
    </div>
  )
}

export default ItemList;