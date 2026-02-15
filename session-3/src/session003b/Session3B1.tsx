import { useState } from "react";

const Session3B1 = () => {
  const [count, setCount] = useState(0);

  console.log("RENDER with count: ", count);

  function handleClick() {
    console.log("---inside handle click---");
    setCount((prev) => {
      const a = prev + 1;
      console.log("1st setCount in:", prev, a);
      return a;
    });
    console.log("first setCount:", count);

    setCount((prev) => {
      const a = prev + 1;
      console.log("2nd setCount in:", prev, a);
      return a;
    });
    console.log("second setCount:", count);

    setCount((prev) => {
      const a = prev + 1;
      console.log("3rd setCount in:", prev, a);
      return a;
    });
    console.log("third setCount:", count);
    console.log("---finish handle click---");
  }

  return (
    <div>
      <p>{count}</p>
      <button className="primary" onClick={handleClick}>
        +3
      </button>
    </div>
  );
};

export default Session3B1;
