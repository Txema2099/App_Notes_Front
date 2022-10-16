//*Importaciones de React
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/TokenContext";
//*Importaciones de peticiones fecth
import { LoginUserServices } from "../services/Peticiones";
import "./LoginPage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useContext(AuthContext);
  const NaviLogin = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await LoginUserServices({ email, password });
      logIn(data);
      NaviLogin("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button>Entrar</button>
        {error ? <p>{error}</p> : null}
      </form>
    </main>
  );
};
