import React from "react";
import { CiShoppingBasket } from "react-icons/ci";
import useLocalStorage from "../hooks/useLocalStorage";

const Card = ({ id, name, category, url, price, stock }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = () => {
    const newItem = { id, name, category, url, price, stock };
    setCart([...cart, newItem]);
  };

  return (
    <div className="card">
      <img src={url} alt={name} className="card-img" />
      <div className="body">
        <h2 className="title">{name}</h2>
        <p className="category">{category}</p>
        <p className="price">${price.toFixed(2)}</p>
        <p className="stock">Stock: {stock}</p>
        <div className="btn">
          <button onClick={addToCart}>
            Add to Cart <CiShoppingBasket size={"25px"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
