import { useEffect, useState } from "react";

const createConnection = (roomId: string) => {
  return {
    connect() {
      console.log(`Connecting to room ${roomId}`);
    },
    disconnect() {
      console.error(`Disconnecting from room ${roomId}`);
    },
  };
};

const Session3B5 = () => {
  const [roomId, setRoomId] = useState("general");

  console.log("Rendered!");

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    console.warn("Connected to room:", roomId);

    return () => {
      connection.disconnect();
    };
  }, [roomId]);

  return (
    <div>
      <p>Room: {roomId}</p>
      <button className="primary" onClick={() => setRoomId("general")}>
        General
      </button>
      <button className="secondary" onClick={() => setRoomId("random")}>
        Random
      </button>
      <button className="danger" onClick={() => setRoomId("MLH")}>
        MLH
      </button>
    </div>
  );
};

export default Session3B5;
