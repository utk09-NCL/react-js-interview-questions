import { useState } from "react";


const BrokenApp = () => {
  const [user, setUser] = useState({ name: "MLH", age: 15 });

  function birthday() {
    user.age += 1;
    setUser(user);
    console.log("set age to:", user.age);
  }

  console.log("Rendered!!!");

  return (
    <div>
      <p>
        {user.name} is {user.age} years old!
      </p>
      <button className="primary" onClick={birthday}>
        Birthday +1
      </button>
    </div>
  );
};

const FixedApp = () => {
  const [user, setUser] = useState({ name: "MLH", age: 15 });

  function birthday() {
    // setUser({ ...user, age: user.age + 1 }); // either this
    setUser((prev) => ({ // or this
      ...prev,
      age: prev.age + 1,
    }));
  }

  console.log("Rendered!!!");
  console.log("user age is:", user.age);

  return (
    <div>
      <p>
        {user.name} is {user.age} years old!
      </p>
      <button className="primary" onClick={birthday}>
        Birthday +1
      </button>
    </div>
  );
};

export default FixedApp;
