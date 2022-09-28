import { Link } from "react-router-dom";

const Auth = () => {
  return (
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
