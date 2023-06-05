import React, { useState } from "react";
import VdoAi from "./VdoAi";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* Player */}
      <VdoAi />
      {/* counter  */}
      <div className="flex">
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
};

export default Counter;
