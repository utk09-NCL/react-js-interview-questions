import { useEffect, useRef, useState } from "react";

export default function Q18() {
  const [position, setPosition] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => prev + 1);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        width: 50,
        height: 50,
        background: "dodgerblue",
        borderRadius: 8,
        transform: `translateX(${position % 400}px)`,
      }}
    />
  );
}