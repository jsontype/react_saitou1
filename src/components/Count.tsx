import { useState } from "react";
import "components/Count.scss";

export default function Count() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button className="countButtonPlus" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button
        className="countButtonMinus"
        onClick={() => count > 0 && setCount(count - 1)}
      >
        -
      </button>
      <div className="countButton">Count : {count}</div>
    </div>
  );
}
