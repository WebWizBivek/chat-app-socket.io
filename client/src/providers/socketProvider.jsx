import React, { createContext,useMemo } from 'react';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { useState } from 'react';
export const SocketContext = createContext(null);

const SocketProvider = ({ children }) => {
    const [count, setCount] = useState(0);
  const newSocket = io('http://localhost:3000');
  
return <SocketContext.Provider value={newSocket}>
    {children}
  </SocketContext.Provider>;


}
export default SocketProvider;
