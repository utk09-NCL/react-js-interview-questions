import { useEffect, useRef, useState } from "react";

const Session3C5 = () => {
  const renderCount = useRef(0);
  const inputRef = useRef<any>(null);

  renderCount.current += 1;

  console.log("Rendered");

  return (
    <div>
      <p>Component rendered {renderCount.current}</p>
      <input type="text" ref={inputRef} />
      <button className="primary" onClick={() => inputRef.current?.focus()}>
        Focus on Input
      </button>
    </div>
  );
};

export default Session3C5;
