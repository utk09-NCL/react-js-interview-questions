import { useEffect, useState } from "react";

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default function Q22B() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [fetched, setFetched] = useState<{
    query: string;
    data: Array<{ id: number; name: string }>;
  }>({ query: "", data: [] });
  const [error, setError] = useState<string | null>(null);

  const trimmedQuery = debouncedQuery.trim();

  const loading = trimmedQuery !== "" && trimmedQuery !== fetched.query;

  const displayResults = trimmedQuery === fetched.query ? fetched.data : [];

  useEffect(() => {
    if (!trimmedQuery) return;

    let cancelled = false;

    fetch(`https://jsonplaceholder.typicode.com/users?q=${encodeURIComponent(trimmedQuery)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setFetched({ query: trimmedQuery, data });
          setError(null);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setFetched({ query: trimmedQuery, data: [] });
          setError(err.message);
        }
      });

    return () => { cancelled = true; };
  }, [trimmedQuery]);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>{displayResults.map((u) => <li key={u.id}>{u.name}</li>)}</ul>
    </div>
  );
}