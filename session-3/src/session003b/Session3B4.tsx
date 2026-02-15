import { useEffect, useState } from "react";

const Session3B4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // setCount((prev) => prev + 1); // trigger re-render
    setCount(count + 1); // trigger re-render
  }, [count]); // count variable changes, run the effect

  return (
    <div>
      <p>{count}</p>
      <button className="primary" onClick={() => setCount((prev) => prev + 1)}>
        +1
      </button>
    </div>
  );
};

export default Session3B4;
