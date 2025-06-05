import React from "react";

export default function MessageInput() {
  return (
    <div className="p-3 bg-[#202c33] flex items-center gap-2">
      <button className="text-white text-xl">😊</button>
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 px-4 py-2 rounded-full bg-[#2a3942] text-white outline-none"
      />
      <button className="text-white text-xl">🎤</button>
    </div>
  );
}
