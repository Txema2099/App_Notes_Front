//*Importaciones de Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//*Importacion de Perticiones fetch
import { NewUserRegisterServices } from "../services/Peticiones";
//*Importaciones de Router
import "./RegisterPage.css";

export const RegisterPage = () => {
  const NaviLogin = useNavigate();
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    if (pass1 !== pass2) {
      setError("Passwords go not match");
      return;
    }
    try {
      await NewUserRegisterServices({ email, password: pass1 });
      //*Navegacion de las el registro es correcto
      NaviLogin("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h1 className="regist">Register</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass1">Password</label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass2">Repeat Password</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>

        <button>Resgistro</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
