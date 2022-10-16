//*Importaciones de modulos
import { Link } from "react-router-dom";

//*importaciones de componentes
import Auth from "./Auth";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <p className="logo"></p>
      </Link>
      <nav>
        <Auth />{" "}
      </nav>
    </header>
  );
};

export default Header;
//<Link to="/">BlogNotes</Link>

//<div className="logo"></div>
