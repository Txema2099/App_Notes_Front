import { Link } from "react-router-dom";

export const ErrorMassage = ({ message }) => {
  return (
    <>
      <p>{message}</p>
      <Link to="/">Volver a Inicio</Link>
    </>
  );
};
