import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
  const [color, setColor] = useState("blue");
  return (
    <AuthContext.Provider value={{ color }}> {children}</AuthContext.Provider>
  );
};
