import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(!isInCart);
  };
  const buttonLabel = isInCart ? "Remove From Cart" : "Add to Cart";
  const itemClass = isInCart ? "in-cart" : ""

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">{buttonLabel}</button>
    </li>
  );
}

export default Item;