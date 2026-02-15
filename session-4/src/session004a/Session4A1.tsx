import { useEffect, useState } from "react";

const fakeSearch = (query: string) =>
  new Promise<Array<{ id: string; title: string }>>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: `${query}-1`, title: `${query} result 1` },
        { id: `${query}-2`, title: `${query} result 2` },
      ]);
    }, 1000);
  });

const SearchResults = ({ query }: { query: string }) => {
  const [results, setResults] = useState<Array<{ id: string; title: string }>>(
    [],
  );

  useEffect(() => {
    let stale = false;
    fakeSearch(query).then((data) => {
      if (!stale) {
        setResults(data);
      }
    });

    return () => {
      stale = true;
    };
  }, [query]);

  return (
    <ul>
      {results.map((r) => (
        <li key={r.id}>{r.title}</li>
      ))}
    </ul>
  );
};

const Session4A1 = () => {
  const [query, setQuery] = useState("react");

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchResults query={query} />
    </div>
  );
};

export default Session4A1;
