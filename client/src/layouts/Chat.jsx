import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import ChatWindow from "../components/ChatWindow.jsx";
import { useContext } from "react";
import { SocketContext } from "../providers/socketProvider.jsx";
import { UserContext } from "../providers/userProvider.jsx";
import { useEffect } from "react";
const Chat = () => {
  const socket = useContext(SocketContext);
  const user = useContext(UserContext);
  useEffect(() => {
    socket.emit("connected", {
      userMail: user.user.email,
    });
  }, []);
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default Chat;
