import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/TokenContext";
import { deleteNoteService } from "../services/Peticiones";

export const Note = ({ note, removeNote }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);

  console.log("esto es el componente nota:", note);
  //console.log(user);
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
        Por: Email o Nombre
        <Link to={`/user/${note.user_id}`}>{user.email}</Link> en la Categoria:
        "{note.categoria}" en "Nota{" "}
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

/*
    <article>
      <p>{note.text}</p>
      {note.image ? (
        <img
          src={`${process.env.REACT_APP_BACK}/uploads/${note.image}`}
          alt={note.text}
        />
      ) : null}
      <p>
        By <Link to={`/users/${note.user_id}`}> {note.email} </Link>
        on{" "}
        <Link to={`/notes/${note.id}`}>
          {" "}
          {new Date(note.created_at).toLocaleString()}
        </Link>
      </p>
      <section>
        {user && user.id === note.user_id ? (
          <button
            onClick={() => {
              if (window.confirm("¿Estás seguro?")) deleteNote(note.id);
            }}
          >
            Borrar Nota{" "}
          </button>
        ) : null}
        {error ? <p>{error}</p> : null}
      </section>
    </article>
  );
};
*/
//ver uso horario
//incluir confirmar borrado nota
//const modifyNota= async(id)=>{
//  try {
//    await modifyNotaService ({id, token})
//      modNota(id)
//  } catch (error) {
//    setError(error)
//  }
//}

//<section>
//{user && user.id === nota.user_id ? (
//  <button onClick={() => modifyNota(nota.id)}>Borrar Nota </button>
//) : null}
//{error ? <p>{error}</p> : null}
//</section>
