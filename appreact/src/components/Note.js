//*importaciones de modulos
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//*importacion de context
import { AuthContext } from "../context/TokenContext";
//*importacion de peticion fecth
import { deleteNoteService } from "../services/Peticiones";

export const Note = ({ note, removeNote }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteNote = async (id) => {
    try {
      await deleteNoteService({ id, token });

      if (removeNote) {
        removeNote(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    //!modificar Public por public al resetear las tablas de mysql por active
    <article className="Note">
      <h1>{note.Titulo}</h1>
      <p>{note.text}</p>
      {note.image ? (
        <img
          src={`${process.env.REACT_APP_BACK}/uploads/${note.image}`}
          alt={note.text}
        />
      ) : null}
      <p>
        Por:{" "}
        {user && user.id === note.user_id ? (
          <Link to={`/user/${note.user_id}`}>{user.email}</Link>
        ) : (
          "Usuario Registrado"
        )}{" "}
        en la Categoria: "{note.categoria}" en "Nota{" "}
        {note.active === 0 ? <span>Privada</span> : <span>Publica</span>}" el{" "}
        <Link to={`/notes/${note.id}`}>
          {new Date(note.created_at).toLocaleString()}
        </Link>
      </p>

      {user && user.id === note.user_id ? (
        <section>
          <button>Modificar Nota</button>{" "}
          <button
            onClick={() => {
              if (window.confirm("Seguro que desea borrar su nota"))
                deleteNote(note.id);
            }}
          >
            Borrar Nota
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
