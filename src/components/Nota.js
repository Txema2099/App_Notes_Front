import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteNotaService } from "../services";

export const Nota = ({ nota, removeNota }) => {
  const { user, token } = useContext(AuthContext);
  //console.log(nota);
  //console.log(user);
  const [error, setError] = useState("");

  const deleteNota = async (id) => {
    try {
      await deleteNotaService({ id, token });
      removeNota(id);
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
        By {nota.email}
        on{" "}
        <Link to={`/nota/${nota.id}`}>
          {" "}
          {new Date(nota.created_at).toLocaleString()}
        </Link>
      </p>
      <section>
        {user && user.id === nota.user_id ? (
          <button onClick={() => deleteNota(nota.id)}>Borrar Nota </button>
        ) : null}
        {error ? <p>{error}</p> : null}
      </section>
    </article>
  );
};
//ver uso horario
//incluir confirmar borrado nota
