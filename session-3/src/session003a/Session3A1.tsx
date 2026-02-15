import { useState } from "react";

const Session3A1 = () => {
  const [count, setCount] = useState(0);

  console.log("Component rendered!");

  return (
    <div>
      <p>{count}</p>
      {/* button 1: increment by 1 */}
      <button
        className="primary"
        onClick={() => {
          setCount(count + 1);
          console.log("+1 clicked");
        }}
      >
        +1
      </button>
      {/* button 2: set same value as before */}
      <button
        className="secondary"
        onClick={() => {
          setCount(count);
          console.log("Set same value clicked");
        }}
      >
        Set same value
      </button>
    </div>
  );
};

export default Session3A1;
