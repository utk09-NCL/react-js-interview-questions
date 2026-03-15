import React, { useState } from "react";

const ExpensiveChild = React.memo(function ExpensiveChild({
  name,
}: {
  name: string;
}) {
  console.log("ExpensiveChild rendered");
  return <p>Hello, {name}</p>;
});

export default function Q12() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className="primary" onClick={() => setCount((c) => c + 1)}>+1 ({count})</button>
      <ExpensiveChild name="Alice" />
    </div>
  );
}