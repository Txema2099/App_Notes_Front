import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteNotaService } from "../services";

export const Nota = ({ nota, removeNota }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);

  console.log("esto es el componente nota:", nota);
  //console.log(user);
  const [error, setError] = useState("");

  const deleteNota = async (id) => {
    try {
      await deleteNotaService({ id, token });
      if (removeNota) {
        removeNota(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article>
      <p>{nota.text}</p>
      {nota.image ? (
        <img
          src={`${process.env.REACT_APP_BACK}/uploads/${nota.image}`}
          alt={nota.text}
        />
      ) : null}
      <p>
        By <Link to={`/users/${nota.user_id}`}> {nota.email} </Link>
        on{" "}
        <Link to={`/notes/${nota.id}`}>
          {" "}
          {new Date(nota.created_at).toLocaleString()}
        </Link>
      </p>
      <section>
        {user && user.id === nota.user_id ? (
          <button
            onClick={() => {
              if (window.confirm("¿Estás seguro?")) deleteNota(nota.id);
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
