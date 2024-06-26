import { useState, useEffect } from "react";
import "./ShopJewelries.scss";
import Count from "./Count";

export default function ShopJewelries() {
  const [jewelries, setJewelries] = useState([]);

  interface Jewel {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: { rate: number; count: number };
  }

  const jewelRatingClass = (rating: { rate: number }) => {
    return rating.rate >= 4 ? "good" : rating.rate >= 3 ? "soso" : "bad";
  };

  // mounted
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const items = json.filter(
          (item: { category?: string }) => item.category === "jewelery"
        );
        setJewelries(items);
        console.log("items: ", items);
      });
  }, []);

  const render = jewelries.map((jewel: Jewel) => {
    return (
      <div key={jewel.id} className="jewelContainer">
        <div className="jewelTitle">
          #{jewel.id} {jewel.title}
        </div>
        <div className="jewelPrice">価格：${jewel.price}</div>
        <div>
          評価：
          <span className={jewelRatingClass(jewel.rating)}>
            {jewel.rating.rate}
          </span>
          /5点
        </div>
        <div className="jewelCount">評価した人数：{jewel.rating.count}人</div>
        <p>製品説明：{jewel.description}</p>
        <img className="jewelImg" src={jewel.image} alt={jewel.title}></img>
        <Count />
      </div>
    );
  });

  return (
    <div>
      <h1>ショップ : ジュエリー(Jewelry)</h1>
      <div>{render}</div>
    </div>
  );
}
