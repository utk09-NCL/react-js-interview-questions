// Q5: After button has been clicked, will it console log 0 or 1?
// And will the count in the button text be 0 or 1?
import { useState } from "react";
import { flushSync } from "react-dom";

export default function Q5() {
  const [count, setCount] = useState(0);

  function handleClick() {
    flushSync(() => {
      setCount(prev => prev + 1);
    });
    console.log("inside:", count);
  }
  console.log("outside:", count);

  return (
    <button className="primary" onClick={handleClick}>Click (count: {count})</button>
  );
}