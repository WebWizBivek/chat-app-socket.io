import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const UserContext = createContext("hi");

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("hi");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
