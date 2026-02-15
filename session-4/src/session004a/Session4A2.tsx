import { useState } from "react";

const Session4A2 = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build app" },
    { id: 3, text: "Deploy" },
  ]);

  function addToTop() {
    setTodos([{ id: Date.now(), text: "New task" }, ...todos]);
  }

  return (
    <div>
      <button className="primary" onClick={addToTop}>
        Add to top
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input defaultValue={todo.text} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Session4A2;
