import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const UserContext = createContext(null);

const userProvider = () => {
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {}, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* Children components will go here */}
    </UserContext.Provider>
  );
};

export default userProvider;
