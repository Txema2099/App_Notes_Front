import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Auth from "./Auth";

const Header = () => {
  const { color } = useContext(AuthContext);

  return (
    <header style={{ backgroundColor: color }}>
      <h1>
        <Link to="/">AppNotas</Link>
      </h1>
      <nav>
        <Auth />{" "}
      </nav>
    </header>
  );
};

export default Header;
