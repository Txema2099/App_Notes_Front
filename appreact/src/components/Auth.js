//*Importaciones de modules
import { useContext } from "react";
import { Link } from "react-router-dom";
//*Importaciones de Context
import { AuthContext } from "../context/TokenContext";

const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  // const nombreuser = user ? { user.name } : {user.email};

  return user ? (
    <p>
      {/* Usuario Conentado: <Link to={`/user/${note.user_id}`}>{user.email}</Link>{" "} */}
      <button onClick={() => logout()}>logOut</button>
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
