import React from "react";

const chats = [
  { name: "Hero", message: "Me aagyi hu office", time: "09:03 AM" },
  { name: "Aahahahah", message: "Good morning", time: "08:00 AM" },
  { name: "Pursottam", message: "Recall kar", time: "12:07 AM" },
  // Add more as needed
];

export default function Sidebar() {
  return (
    <div className="w-[30%] bg-[#111b21] text-white p-2 overflow-y-auto">
      {chats.map((chat, index) => (
        <div
          key={index}
          className="p-3 hover:bg-[#202c33] rounded-lg cursor-pointer"
        >
          <div className="font-semibold">{chat.name}</div>
          <div className="text-sm text-gray-400">{chat.message}</div>
          <div className="text-xs text-gray-500 text-right">{chat.time}</div>
        </div>
      ))}
    </div>
  );
}
