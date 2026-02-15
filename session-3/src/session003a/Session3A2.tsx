import { useState } from "react";

const Child = () => {
  console.log("Child rendered!");
  return <p>I'm the child component</p>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent rendered!");
  return (
    <div>
      <p>Parent: {count}</p>
      {/* button 1: increment by 1 */}
      <button
        className="primary"
        onClick={() => {
          setCount((c) => c + 1);
          console.log("+1 clicked");
        }}
      >
        +1
      </button>
      <Child />
    </div>
  );
};

export default ParentComponent;
