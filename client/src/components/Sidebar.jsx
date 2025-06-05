import React, { useState } from "react";
import {
  Search,
  MoreVertical,
  MessageCircle,
  Users,
  Settings,
  Bell,
} from "lucide-react";

const chats = [
  {
    id: 1,
    name: "Hero",
    message: "Me aagyi hu office",
    time: "09:03 AM",
    unread: 2,
    online: true,
    avatar: "H",
  },
  {
    id: 2,
    name: "Aahahahah",
    message: "Good morning",
    time: "08:00 AM",
    unread: 0,
    online: true,
    avatar: "A",
  },
  {
    id: 3,
    name: "Pursottam",
    message: "Recall kar",
    time: "12:07 AM",
    unread: 5,
    online: false,
    avatar: "P",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    message: "Hey, how's the project going?",
    time: "Yesterday",
    unread: 0,
    online: false,
    avatar: "S",
  },
  {
    id: 5,
    name: "Team Alpha",
    message: "Meeting at 3 PM today",
    time: "Yesterday",
    unread: 1,
    online: true,
    avatar: "T",
  },
];

const getAvatarColor = (name) => {
  const colors = [
    "bg-gradient-to-br from-purple-500 to-pink-500",
    "bg-gradient-to-br from-blue-500 to-cyan-500",
    "bg-gradient-to-br from-green-500 to-emerald-500",
    "bg-gradient-to-br from-orange-500 to-red-500",
    "bg-gradient-to-br from-indigo-500 to-purple-500",
  ];
  return colors[name.length % colors.length];
};

export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChat, setActiveChat] = useState(1);

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-[30%] bg-gradient-to-b from-[#0f1419] to-[#111b21] text-white flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-[#2a3942]/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ChatyApp
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Users className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#2a3942]/50 border border-[#2a3942] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
          />
        </div>
      </div>

      {/* Chat Tabs */}
      <div className="flex px-4 py-2 space-x-1 border-b border-[#2a3942]/50">
        <button className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium transition-colors">
          All Chats
        </button>
        <button className="px-4 py-2 hover:bg-white/10 text-gray-400 rounded-lg text-sm font-medium transition-colors">
          Unread
        </button>
        <button className="px-4 py-2 hover:bg-white/10 text-gray-400 rounded-lg text-sm font-medium transition-colors">
          Groups
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setActiveChat(chat.id)}
            className={`relative group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
              activeChat === chat.id
                ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/10"
                : "hover:bg-[#202c33]/80"
            }`}
          >
            {/* Avatar with Online Status */}
            <div className="relative">
              <div
                className={`w-12 h-12 rounded-full ${getAvatarColor(
                  chat.name
                )} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
              >
                {chat.avatar}
              </div>
              {chat.online && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#111b21] rounded-full"></div>
              )}
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-center mb-1">
                <span
                  className={`font-semibold truncate ${
                    activeChat === chat.id ? "text-white" : "text-gray-100"
                  }`}
                >
                  {chat.name}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-400">{chat.time}</span>
                  {chat.unread > 0 && (
                    <div className="min-w-[20px] h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white px-1">
                        {chat.unread > 99 ? "99+" : chat.unread}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400 truncate pr-2 flex-1">
                  {chat.message}
                </div>
                {chat.unread > 0 && (
                  <Bell className="w-4 h-4 text-purple-400 flex-shrink-0" />
                )}
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-[#2a3942]/50">
        <div className="flex items-center space-x-3 p-3 bg-[#2a3942]/30 rounded-xl">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">Y</span>
          </div>
          <div className="flex-1">
            <div className="font-medium">You</div>
            <div className="text-sm text-gray-400">Online</div>
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
