// Would MemoChild be re-rendered on evey button click?
// If yes, why and how do we avoid it? If No, why?
import React, { useState } from "react";

const MemoChild = React.memo(function MemoChild({ style, onPing }: {
  style: React.CSSProperties;
  onPing: () => void;
}) {
  console.log("MemoChild rendered");
  return (
    <p className="danger" style={style} onClick={onPing}>
      Child (click me)
    </p>
  );
});

export default function Q13() {
  const [count, setCount] = useState(0);

  const style = { color: "yellow" };
  const onPing =() => console.log("ping");

  return (
    <div>
      <button className="primary"
        onClick={() => setCount((c) => c + 1)}>
        +1 ({count})
      </button>
      <MemoChild style={style} onPing={onPing} />
    </div>
  );
}