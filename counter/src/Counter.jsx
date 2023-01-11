import React, { useState } from "react";
import Name from "./components/Name";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);
  return (
    <div>
      <Name />
      <h1>Counter App</h1>
      <p>
        Current count: <strong>{count}</strong>
      </p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};
