// Q2: How many times will "expensiveCompute ran" be printed in both InlineInit & LazyInit?
// And Why?
import { useEffect, useState } from "react";

const expensiveComputeInline = () => {
  console.log("[Inline] expensiveCompute ran");
  return Array.from({ length: 1000 }, (_, i) => i);
};

const expensiveComputeLazy = () => {
  console.log("[Lazy] expensiveCompute ran");
  return Array.from({ length: 1000 }, (_, i) => i);
};

function InlineInit() {
  console.count("[Inline] render");

  const [items] = useState(expensiveComputeInline());
  const [tick, setTick] = useState(0);

  useEffect(() => {
    console.count("[Inline] commit");
    console.log("[Inline] committed with tick", tick);
  });

  return (
    <div>
      <p>
        A (inline): {items.length} items, tick {tick}
      </p>
      <button
        className="secondary"
        onClick={() => {
          console.log("[Inline] click");
          setTick((t) => t + 1);
        }}
      >
        Re-render A
      </button>
    </div>
  );
}

function LazyInit() {
  console.count("[Lazy] render");

  const [items] = useState(expensiveComputeLazy);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    console.count("[Lazy] commit");
    console.log("[Lazy] committed with tick", tick);
  });

  return (
    <div>
      <p>
        B (lazy): {items.length} items, tick {tick}
      </p>
      <button
        className="primary"
        onClick={() => {
          console.log("[Lazy] click");
          setTick((t) => t + 1);
        }}
      >
        Re-render B
      </button>
    </div>
  );
}

export default function Q2() {
  console.count("[Q2] render");
  return (
    <div>
      <InlineInit />
      <LazyInit />
    </div>
  );
}