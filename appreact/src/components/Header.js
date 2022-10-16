//*Importaciones de modulos
import { Link } from "react-router-dom";

//*importaciones de componentes
import Auth from "./Auth";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">BlogNotes</Link>
      </h1>
      <nav>
        <Auth />{" "}
      </nav>
    </header>
  );
};

export default Header;
