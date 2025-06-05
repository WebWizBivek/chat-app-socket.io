import React from "react";
import MessageInput from "./MessageInput";

export default function ChatWindow() {
  return (
    <div className="w-[70%] bg-[#222e35] flex flex-col">
      <div className="flex-1 bg-[url('/chat-bg.png')] bg-cover p-4 text-white overflow-y-auto">
        {/* Add your chat messages here */}
        <div className="mb-2 text-right">
          <span className="bg-[#005c4b] px-3 py-2 rounded-xl inline-block">
            Me aagyi hu office
          </span>
          <div className="text-xs text-gray-400">09:03 AM</div>
        </div>
      </div>
      <MessageInput />
    </div>
  );
}
