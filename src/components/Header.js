//*Importaciones de modulos
import { Link } from "react-router-dom";

//*importaciones de componentes
import Auth from "./Auth";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo"></Link>
      <nav>
        <Auth />{" "}
      </nav>
    </header>
  );
};

export default Header;
