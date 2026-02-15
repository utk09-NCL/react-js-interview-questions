import { useEffect, useState } from "react";

const Session4A4 = () => {
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

export default Session4A4;
