import { useEffect, useState } from "react";

const Session3C4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  console.log("tick, count is:", count);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default Session3C4;
