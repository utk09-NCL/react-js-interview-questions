// Q21: What will be the order of logs in console?
import { useEffect, useLayoutEffect } from "react";

export default function Q21() {
  useEffect(() => {
    console.log("1: useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("2: useLayoutEffect");
  }, []);

  console.log("3: render");
  queueMicrotask(() => console.log("4: microtask"));

  return <p>What will be the order of logs in console?</p>;
}