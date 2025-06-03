import React, { useState } from 'react';
import { useContext } from 'react';
import { SocketContext } from '../providers/socketProvider.jsx';
function NameRoomForm() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
    const socket= useContext(SocketContext);
  const handleClick = () => {
    socket.emit("hello","i love india")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="px-4 py-2 w-64 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        placeholder="Enter room name"
        className="px-4 py-2 w-64 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </div>
  );
}

export default NameRoomForm;
