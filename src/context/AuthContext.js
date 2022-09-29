import { createContext, useEffect, useState } from "react";
import { geyMyUserDataService } from "../services";
export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await geyMyUserDataService({ token });
        setUser(data);
      } catch (error) {
        logOut();
      }
    };

    if (token) getUserData();
  }, [token]);

  const logIn = (token) => {
    setToken(token);
  };

  const logOut = () => {
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
