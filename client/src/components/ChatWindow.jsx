import React, { useState, useRef, useEffect } from "react";
import {
  Phone,
  Video,
  MoreVertical,
  Search,
  Smile,
  Paperclip,
  Mic,
  Send,
  Check,
  CheckCheck,
} from "lucide-react";
// Mock messages data
const mockMessages = [
  {
    id: 1,
    text: "Hey! How are you doing?",
    sender: "other",
    time: "08:45 AM",
    status: "read",
  },
  {
    id: 2,
    text: "I'm doing great! Just finished my morning workout 💪",
    sender: "me",
    time: "08:47 AM",
    status: "read",
  },
  {
    id: 3,
    text: "That's awesome! I should start working out too",
    sender: "other",
    time: "08:48 AM",
    status: "read",
  },
  {
    id: 4,
    text: "You totally should! It's really energizing",
    sender: "me",
    time: "08:50 AM",
    status: "read",
  },
  {
    id: 5,
    text: "Me aagyi hu office",
    sender: "other",
    time: "09:03 AM",
    status: "delivered",
  },
  {
    id: 6,
    text: "Great! Have a productive day at work! 🚀",
    sender: "me",
    time: "09:05 AM",
    status: "sent",
  },
];

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 bg-[#1e2428] border-t border-[#2a3942]/50">
      <div className="flex items-end space-x-3">
        <button className="p-3 hover:bg-[#2a3942] rounded-full transition-colors">
          <Paperclip className="w-5 h-5 text-gray-400" />
        </button>

        <div className="flex-1 relative">
          <div className="bg-[#2a3942] rounded-2xl px-4 py-3 flex items-center space-x-3">
            <button className="hover:bg-[#3a4a52] p-1 rounded transition-colors">
              <Smile className="w-5 h-5 text-gray-400" />
            </button>

            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {message.trim() ? (
          <button
            onClick={handleSend}
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        ) : (
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
              isRecording
                ? "bg-red-500 hover:bg-red-600 animate-pulse"
                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            }`}
          >
            <Mic className="w-5 h-5 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default function ChatWindow() {
  const [currentChat] = useState({
    name: "Hero",
    status: "online",
    lastSeen: "last seen today at 09:03 AM",
  });

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const formatTime = (time) => {
    return time;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "sent":
        return <Check className="w-4 h-4 text-gray-400" />;
      case "delivered":
        return <CheckCheck className="w-4 h-4 text-gray-400" />;
      case "read":
        return <CheckCheck className="w-4 h-4 text-blue-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-[70%] bg-gradient-to-b from-[#1a2028] to-[#222e35] flex flex-col h-screen">
      {/* Header */}
      <div className="bg-[#1e2428] border-b border-[#2a3942]/50 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                H
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#1e2428] rounded-full"></div>
            </div>
            <div>
              <h3 className="text-white font-semibold">{currentChat.name}</h3>
              <p className="text-sm text-green-400">{currentChat.status}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-[#2a3942] rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-[#2a3942] rounded-lg transition-colors">
              <Phone className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-[#2a3942] rounded-lg transition-colors">
              <Video className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-[#2a3942] rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Chat Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Date Separator */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#2a3942]/70 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs text-gray-400">Today</span>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-3 relative z-10">
          {mockMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] ${
                  msg.sender === "me" ? "order-2" : "order-1"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-200 ${
                    msg.sender === "me"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-md"
                      : "bg-[#2a3942] text-white rounded-bl-md border border-[#3a4a52]"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
                <div
                  className={`flex items-center space-x-1 mt-1 ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <span className="text-xs text-gray-400">
                    {formatTime(msg.time)}
                  </span>
                  {msg.sender === "me" && getStatusIcon(msg.status)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Typing Indicator */}
        <div className="flex justify-start">
          <div className="bg-[#2a3942] px-4 py-3 rounded-2xl rounded-bl-md border border-[#3a4a52]">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>

        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <MessageInput />
    </div>
  );
}
