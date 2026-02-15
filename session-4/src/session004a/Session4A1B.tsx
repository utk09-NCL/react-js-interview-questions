import { useEffect, useState } from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const TodoResult = ({ todoId }: any) => {
  const [todoResult, setTodoResult] = useState<any>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchTodo = async () => {
      await delay(2000);

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        {
          signal: controller.signal,
        },
      );
      const data = await res.json();
      setTodoResult(data);
    };

    fetchTodo().catch((err) => {
      console.error("error occurred", err);
    });

    return () => controller.abort("user changed input");
  }, [todoId]);

  if (!todoResult) return;

  return (
    <div>
      <p>ID: {todoResult.id}</p>
      <p>Title: {todoResult.title}</p>
    </div>
  );
};

const Session4A1B = () => {
  const [todoId, setTodoId] = useState("1");

  return (
    <div>
      <input
        type="text"
        value={todoId}
        onChange={(e) => setTodoId(e.target.value)}
      />
      <TodoResult todoId={todoId} />
    </div>
  );
};

export default Session4A1B;
