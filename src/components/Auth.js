import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
//import { useContext } from "react";

const Auth = () => {
  const { user, logOut } = useContext(AuthContext);

  return user ? (
    <p>
      {" "}
      El usuario está conectado como {user.email}{" "}
      <button onClick={() => logOut()}>Logout</button>{" "}
    </p>
  ) : (
    <ul>
      <li>
        <Link to="/register"> Registro </Link>
      </li>
      <li>
        <Link to="/login"> Login </Link>
      </li>
    </ul>
  );
};

export default Auth;
