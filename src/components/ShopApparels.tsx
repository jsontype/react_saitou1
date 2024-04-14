import { useState, useEffect } from "react";
import "./ShopApparels.scss";
import Count from "./Count";

export default function ShopApparels() {
  const [apparels, setApparels] = useState<Apparel[]>([]);

  interface Apparel {
    id: number;
    title?: string;
    price?: number;
    description?: string;
    image?: string;
  }

  // mounted
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const items = json.filter(
          (item: { category?: string }) => item.category === "men's clothing"
        );
        setApparels(items);
      });
  }, []);

  const renderApparels = () => {
    return apparels.map((apparel: Apparel) => (
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
