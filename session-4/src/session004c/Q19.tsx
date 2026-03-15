// Q19: useEffect vs useLayoutEffect, when to use which one?
// Pros and Cons
import { useLayoutEffect, useRef, useState } from "react";

export default function Q19() {
  const targetRef = useRef<HTMLButtonElement | null>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    if (!targetRef.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    setPos({ top: rect.bottom + 8, left: rect.left });
  }, []);

  return (
    <div style={{ position: "relative", padding: 40 }}>
      <button className="primary" ref={targetRef}>Target</button>
      <div
        style={{
          position: "absolute",
          top: pos.top,
          left: pos.left,
          background: "black",
          color: "white",
          padding: "4px 8px",
          borderRadius: 4,
        }}
      >
        Tooltip (no jump)
      </div>
    </div>
  );
}