import { useEffect, useRef, useState } from "react";

const Session4A6 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  countRef.current = count;

  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick, count is:", countRef.current);
      setCount(countRef.current + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // console.log("tick, count is:", count);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default Session4A6;
