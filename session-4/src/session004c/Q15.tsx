// Q15: Typing in input should re-render ResetButton or skip it?
// If yes, why and how do we avoid it? If No, why?
import React, { useCallback, useState } from "react";

const ResetButton = React.memo(function ResetButton({
  onReset,
}: {
  onReset: () => void;
}) {
  console.log("ResetButton rendered");
  return <button onClick={onReset}>Reset</button>;
});

export default function Q15() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleReset = useCallback(() => setCount(0), []);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <p>Count: {count}</p>
      <button className="primary" onClick={() => setCount((c) => c + 1)}>+1</button>
      <ResetButton onReset={handleReset} />
    </div>
  );
}