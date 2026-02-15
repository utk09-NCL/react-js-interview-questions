import { useState } from "react";

const Session3B2 = () => {
  const [items, setItems] = useState(["apple", "banana"]);

  console.log("Rendered 3B2");

  function addItem() {
    items.push("cherry"); // mutating
    setItems(items); // referencing same object, so no re-render
    console.log("clicked addItem");
  }

  function addItemCorrect() {
    // setItems([...items, "cherry"]);
    setItems((prev) => [...prev, "cherry"]); // new reference, so re-render, so value updated
    console.log("clicked addItemCorrect");
  }

  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button className="primary" onClick={addItem}>
        Add (broken)
      </button>
      <button className="secondary" onClick={addItemCorrect}>
        Add (correct)
      </button>
    </div>
  );
};

export default Session3B2;
