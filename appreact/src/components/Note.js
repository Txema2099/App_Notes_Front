//*importaciones de modulos
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
//*importacion de context
import { AuthContext } from "../context/TokenContext";
//*importacion de peticion fecth
import { deleteNoteService } from "../services/Peticiones";

export const Note = ({ note, removeNote }) => {
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteNote = async (id) => {
    try {
      await deleteNoteService({ id, token });
      removeNote(id);
    } catch (error) {
      setError(error.message);
    }
  };
  //   const modifyNote = async (id) => {};

  return (
    //!modificar Public por public al resetear las tablas de mysql por active
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
        Por: Email o Nombre{note.email} en la Categoria: "{note.categoria}" en
        "Nota {note.active === 0 ? <span>Privada</span> : <span>Publica</span>}"{" "}
        el{" "}
        <Link to={`/notes/${note.id}`}>
          {new Date(note.created_at).toLocaleString()}
        </Link>{" "}
        {user && user.id === note.user_id ? (
          <button /* onClick={() => modifyNote(note.id)}*/>
            Modificar Nota
          </button>
        ) : null}{" "}
        {user && user.id === note.user_id ? (
          <button onClick={() => deleteNote(note.id)}>Borrar Nota</button>
        ) : null}
      </p>
    </article>
  );
};
