import { createContext, useEffect, useState } from "react";
import { UserDataServices } from "../services/Peticiones";
export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await UserDataServices({ token });
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
