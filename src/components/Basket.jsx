import React, { useState, useEffect } from "react";

const Basket = () => {
  const [items, setItems] = useState([]);

  const getItemsFromLocalStorage = () => {
    try {
      const items = JSON.parse(window.localStorage.getItem("cart")) || [];
      return items;
    } catch (error) {
      console.error("Error retrieving items from localStorage:", error);
      return [];
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const storedItems = getItemsFromLocalStorage();
      setItems(storedItems);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const removeFromBasket = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    window.localStorage.setItem("cart", JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  const handleLocalStorageChange = (event) => {
    if (event.key === "cart") {
      const updatedItems = getItemsFromLocalStorage();
      setItems(updatedItems);
    }
  };

  useEffect(() => {
    window.addEventListener("storage", handleLocalStorageChange);
    return () => {
      window.removeEventListener("storage", handleLocalStorageChange);
    };
  }, []);

  const totalSalary = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container">
      <h2>Your Basket</h2>
      <div className="items">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="item">
              <img src={item.url} alt={item.name} className="item-img" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Category: {item.category}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Stock: {item.stock}</p>
                <button onClick={() => removeFromBasket(index)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Empty</p>
        )}
      </div>
      <div className="salary">
        <p>Total Salary: ${totalSalary.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Basket;
