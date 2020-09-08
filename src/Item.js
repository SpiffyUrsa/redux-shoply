import React from "react";


function Item({name, price, description, image_url}) {

  return (
    <div className="Item">
      <h3>{name}</h3>
      <img src={image_url} alt={name} className="img-fluid" />
      <p>{description}</p>
      <h3>{price}</h3>
      <button>Add To Cart</button>
      <button>Remove From Cart</button>
    </div>
  )
}

export default Item;