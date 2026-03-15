// Q7: Does "Child" get rendered when parent state changes if the props are the same?
import { useState } from "react";

function Child({ label }: { label: string }) {
  console.log("Child rendered");
  return <p>Label: {label}</p>;
}

export default function Q7() {
  const [count, setCount] = useState(0);
  console.log("Q7 rendered");
  return (
    <div>
      <button className="primary" onClick={() => setCount((c) => c + 1)}>
        Parent count: {count}
      </button>
      <Child label="fixed" />
    </div>
  );
}

/**
 * Answer: Yes, because by default, react will re-render all Child components if parent re-renders.
 * But, we can avoid it, by wrapping the child component in React.memo
 * const MemoizedChild = memo(function Child({ label }: { label: string }) {
      console.log("MemoizedChild rendered");
      return <p>Label: {label}</p>;
  })
 * And use as
  <MemoizedChild label="memoized fixed" />
 */