import { createContext, useState } from "react";
export const OtherUserContext = createContext();

export const OtherUserProvider = ({ children }) => {
  const [otherUser, setOtherUser] = useState(null);

  return (
    <OtherUserContext.Provider value={{ otherUser, setOtherUser }}>
      {children}
    </OtherUserContext.Provider>
  );
};
