//*Importaciones de modules
import { useContext } from "react";
import { Link } from "react-router-dom";
//*Importaciones de Context
import { AuthContext } from "../context/TokenContext";

const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <div>
      <p>
        Usuario Conectado: <Link to={`/user/${user.id}`}>{user.email}</Link>{" "}
        <button onClick={() => logout()}>logOut</button>
      </p>
    </div>
  ) : (
    <ul className="register">
      <span>
        <Link to="/register" className="register">
          {" "}
          Registro{" "}
        </Link>
      </span>
      <span>
        <Link to="/login" className="login">
          {" "}
          Login{" "}
        </Link>
      </span>
    </ul>
  );
};

export default Auth;
