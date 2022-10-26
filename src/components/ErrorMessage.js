import { Link } from "react-router-dom";
import "./Note.css";

export const ErrorMassage = ({ message }) => {
  return (
    <section className="error">
      <p>{message}</p>
      <Link to="/">Volver a Inicio</Link>
    </section>
  );
};
