// Q20: What will be the order of logs in console?
import { useEffect } from "react";

export default function Q20() {
  console.log("0: outside");

  useEffect(() => {
    console.log("1: sync");
    queueMicrotask(() => console.log("2: microtask"));
    Promise.resolve().then(() => console.log("3: promise.then"));
    requestAnimationFrame(() => console.log("4: rAF"));
    setTimeout(() => console.log("5: setTimeout"), 0);
  }, []);

  console.log("6: outside");

  return <p>What will be the order of logs in console?</p>;
}