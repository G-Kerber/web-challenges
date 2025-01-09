import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  let [value, setValue] = useState(50);
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => setValue(value + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setValue(value - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
