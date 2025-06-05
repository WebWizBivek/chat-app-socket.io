import React, { useState } from "react";
import { FiSend } from "react-icons/fi"; // Send icon from react-icons

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (trimmedMessage) {
      // You can send this to parent via props or handle here
      onSend?.(trimmedMessage);
      console.log("Sent message:", trimmedMessage); // for demo
      setMessage(""); // clear input
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 bg-[#202c33] flex items-center gap-2"
    >
      <button type="button" className="text-white text-xl">
        😊
      </button>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 rounded-full bg-[#2a3942] text-white outline-none 
                   placeholder:text-gray-400 transition duration-300 
                   focus:ring-2 focus:ring-[#00a884] hover:bg-[#32444e]"
      />

      {message.trim() ? (
        <button type="submit" className="text-[#00a884] text-2xl">
          <FiSend />
        </button>
      ) : (
        <button type="button" className="text-white text-xl">
          🎤
        </button>
      )}
    </form>
  );
}
