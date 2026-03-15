// Q3: Will the input still have the text or will it disappear?
// Why?
import { useState } from "react";

function GlobalSearch({ tabId }: { tabId: number }) {
  const [draft, setDraft] = useState("");
  console.count("GlobalSearch rendered");
  return (
    <div>
      <p>Editing search {tabId}</p>
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default function Q3() {
  const [id, setId] = useState(1);
  console.count("Q3 rendered");
  return (
    <div>
      <GlobalSearch key={id} tabId={id} />
      <button className="primary" onClick={() => setId((prev) => (prev === 1 ? 2 : 1))}>
        Switch tab (current: {id})
      </button>
    </div>
  );
}

// Rephrasing the question:
// The business requirement is to clear the global input box whenever user switches tabs
// How would you do it?
// Answer: By passing the "key={id}" prop to GlobalSearch (basically avoiding useEffect)