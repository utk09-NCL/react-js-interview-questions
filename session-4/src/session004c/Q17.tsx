// Q17: Click on counter, does expensive tree re-render?
// If yes, why and how do we avoid it? If No, why?
import { useState } from "react";

function ExpensiveTree() {
  console.log("ExpensiveTree rendered");
  return <p>Expensive tree</p>;
}

function Counter({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className="primary" onClick={() => setCount((c) => c + 1)}>+1 ({count})</button>
      {children}
    </div>
  );
}

export default function Q17() {
  return (
    <Counter>
      <ExpensiveTree />
    </Counter>
  );
}