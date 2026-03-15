import { useMemo, useState } from "react";

const ITEMS = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
}));

export default function Q14() {
  const [filter, setFilter] = useState("");
  const [tick, setTick] = useState(0);

  const filtered = useMemo(
    () => ITEMS.filter((item) => item.name.includes(filter)),
    [filter]
  );

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter 10k items..."
      />
      <button className="primary" onClick={() => setTick((t) => t + 1)}>
        Unrelated rerender ({tick})
      </button>
      <p>{filtered.length} results</p>
    </div>
  );
}