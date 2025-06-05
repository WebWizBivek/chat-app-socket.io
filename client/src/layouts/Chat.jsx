import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import ChatWindow from "../components/ChatWindow.jsx";
import { useContext } from "react";
import { SocketContext } from "../providers/socketProvider.jsx";
import { useEffect } from "react";
const Chat = () => {
  const socket = useContext(SocketContext);
  useEffect(() => {
    socket.emit("connectd", () => {});
  }, []);
  console.log(socket);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default Chat;
