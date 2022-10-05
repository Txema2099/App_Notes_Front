import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logInUserService } from "../services";
import "./Login.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const token = await logInUserService({ email, password });
      logIn(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section id="login" className="modal-like">
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">
            <span>Email</span>{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">
            <span>Password</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button>LogIn</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
