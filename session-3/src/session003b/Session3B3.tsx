import { useEffect, useState } from "react";

const Session3B3 = () => {
  const [userId, setUserId] = useState("alice");

  console.log("Rendered!!!!");

  useEffect(() => {
    console.log("A: every render");
  });

  useEffect(() => {
    console.log("B: mount only");
  }, []);

  useEffect(() => {
    console.log("C: every time userId changes -", userId);
  }, [userId]);

  return (
    <div>
      <p>User: {userId}</p>
      <button className="primary" onClick={() => setUserId("alice")}>
        Set Alice
      </button>
      <button className="secondary" onClick={() => setUserId("bob")}>
        Set Bob
      </button>
    </div>
  );
};

export default Session3B3;
