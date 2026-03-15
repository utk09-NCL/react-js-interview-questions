// Q8: Build a useDebounce hook
// 1. Are we debouncing input state or API calls? -- Ans: API call

import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  console.log({ debouncedValue });
  return debouncedValue;
}

export default function Q8() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("Fetching data for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <p>Raw: {query}</p>
      <p>Debounced Value: {debouncedQuery}</p>
    </>
  )
}