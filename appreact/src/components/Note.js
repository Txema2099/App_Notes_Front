//*importaciones de modulos
import { Link } from "react-router-dom";

export const Note = ({ note }) => {
  return (
    <article>
      <h1>{note.Titulo}</h1>
      <p>{note.text}</p>
      {note.image ? (
        <img
          src={`${process.env.REACT_APP_BACK}/uploads/${note.image}`}
          alt={note.text}
        />
      ) : null}
      <p>
        {note.categoria} por Email o Nombre{note.email} el{" "}
        <Link to={`/notes/${note.id}`}>
          {new Date(note.created_at).toLocaleString()}
        </Link>
        {/* Nota {note.Public ? 0==Privada : 1==Publica} */}
      </p>
    </article>
  );
};
