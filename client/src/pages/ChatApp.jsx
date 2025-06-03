import React, { useState } from 'react';

function ChatInput() {
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-4 bg-white border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
