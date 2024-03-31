import React from "react";
import { useState, useEffect } from "react";
import "./ShopJewelries.css";

export default function ShopJewelries() {
  const [jewelries, setJewelries] = useState([]);

  // mounted
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const items = json.filter((item) => item.category === "jewelery");
        setJewelries(items);
        console.log("items: ", items);
      });
  }, []);

  const render = jewelries.map((jewel) => {
    return (
      <div key={jewel.id}>
        <div>{jewel.title}</div>
        <div>${jewel.price}</div>
      </div>
    );
  });

  return (
    <div>
      <h1>ShopJewelries</h1>
      <div>{render}</div>
    </div>
  );
}
