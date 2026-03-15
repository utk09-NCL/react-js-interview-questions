// Q1: How many time is "render" logged?
import { useState } from "react";

export default function Q1() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  console.log("render");

  function handleClick() {
    setA(1);
    setB(1);
    console.log("clicked");
  }

  return (
    <button className="primary" onClick={handleClick}>
      Click (a: {a}, b: {b})
    </button>
  );
}

// Ans: Once, because React batches state updates

