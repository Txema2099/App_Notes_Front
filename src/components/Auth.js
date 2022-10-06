import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/TokenContext";

const Auth = () => {
  const { user, logOut } = useContext(AuthContext);

  return user ? (
    <p>
      {" "}
      El usuario está conectado como{" "}
      <Link to={`/user/${user.id}`}>{user.email}</Link>
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

//<Link to={`/users/${user.id}`}>{user.email}</Link> {user.email}{" "}
