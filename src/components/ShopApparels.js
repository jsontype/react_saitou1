import React from "react";
import { useState, useEffect } from "react";
import "./ShopApparels.scss";
import Count from "./Count.js";

export default function ShopApparels() {
  const [apparels, setApparels] = useState([]);

  // mounted
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const items = json.filter((item) => item.category === "men's clothing");
        setApparels(items);
      });
  }, []);

  const renderApparels = () => {
    return apparels.map((apparel) => (
      <div key={apparel.id} className="apparelContainer">
        <div className="apparelTile">{apparel.title}</div>
        <div className="apparelPrice">${apparel.price}</div>
        {apparel.image && (
          <img
            src={apparel.image}
            alt={apparel.title}
            className="apparelImage"
          />
        )}
        <div className="apparelDescription">{apparel.description}</div>
        <div>
          <Count />
        </div>
      </div>
    ));
  };

  return (
    <div className="shopApparels">
      <h1>ShopApparels</h1>
      <div className="apparelsContainer">{renderApparels()}</div>
    </div>
  );
}
