import React, { useState, useContext, useEffect } from "react";
import { SocketContext } from "../providers/socketProvider";
import { useSearchParams } from "react-router-dom";

function Room() {
  const socket = useContext(SocketContext);
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const room = searchParams.get("room");

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Listen for incoming messages
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const msgData = {
      room,
      name,
      text: message,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", msgData);
    setMessages((prev) => [...prev, msgData]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">
      <h2 className="text-xl font-bold text-center mb-4">Room: {room}</h2>

      <div className="flex-1 overflow-y-auto bg-white p-4 rounded-md shadow mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="font-semibold">{msg.name}:</span>{" "}
            <span>{msg.text}</span>
            <span className="text-xs text-gray-500 ml-2">({msg.time})</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Room;
