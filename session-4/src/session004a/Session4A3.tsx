import { useState, type ChangeEvent } from "react";

const Session4A3 = () => {
  const [query, setQuery] = useState("");
  // const [results, setResults] = useState("");

  const results = `Searching for: ${query}`;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    // setResults(`Searching for: ${query}`);
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      <p>{results}</p>
    </div>
  );
};

export default Session4A3;
