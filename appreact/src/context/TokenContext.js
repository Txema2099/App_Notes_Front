//*Importaciones de modules
import { createContext, useEffect, useState } from "react";
//*Importaciones de Peticiones fecth
import { UserDataServices } from "../services/Peticiones";

export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  //*guardado del tokken en la localstorage
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await UserDataServices({ token });

        setUser(data);
      } catch (error) {
        //*Si cumple error deslogueamos el usuario
        logout();
      }
    };

    if (token) getUserData();
  }, [token]);

  //*login envia el token des login a localstorage
  const logIn = (token) => {
    setToken(token);
  };

  //*deslogueo Forzoso de usuario
  const logout = () => {
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, logIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
