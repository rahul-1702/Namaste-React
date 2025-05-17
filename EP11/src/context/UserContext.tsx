import React, { createContext, useState } from "react";

type userContextType = {
  name: string;
  age: number;
};

export type UserContextValue = {
  userInfo: userContextType;
  setUserInfo: React.Dispatch<React.SetStateAction<userContextType>>;
  finalName: string;
};

export const UserContext = createContext<UserContextValue>({
  userInfo: {
    name: "Default User",
    age: 18,
  },
  setUserInfo: () => {},
  finalName: "final",
});

interface ContextProps {
  children: React.ReactNode;
  finalName: string;
}

const UserProvider: React.FC<ContextProps> = ({ children, finalName }) => {
  
  // This Global Context is best way for State Management rather than (Lifting The State Up) or (Props Drilling)

  const [userInfo, setUserInfo] = useState<userContextType>({
    name: "Rahul Taak",
    age: 23,
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, finalName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
