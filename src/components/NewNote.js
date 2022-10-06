import { useContext, useState } from "react";
import { AuthContext } from "../context/TokenContext";
import { sendNoteService } from "../services/Peticiones";
//si no paso addNota como fx({}) en linea 6 no me tira los errores

export const NewNote = ({ addNote }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData(e.target);
      const note = await sendNoteService({ data, token });
      addNote(note);
      e.target.reset();
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Add New Note</h1>
      <form className="new-note" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="Titulo">Titulo</label>
          <input type="Titulo" name="Titulo" id="Titulo" required />
        </fieldset>
        <fieldset>
          <label htmlFor="text">Text</label>
          <input type="text" name="text" id="text" required />
        </fieldset>
        <fieldset>
          <label htmlFor="categoria">Categoria</label>
          <input type="categoria" name="categoria" id="categoria" required />
        </fieldset>
        <fieldset>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            accept={"image/*"}
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image ? (
            <figure>
              <img
                src={URL.createObjectURL(image)}
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
        </fieldset>
        <button>Subir Nota</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>Subiendo Nueva Nota...</p> : null}
      </form>
    </>
  );
};

/*<form onSubmit={handleForm}>
      <h1>Añade nueva Nota</h1>
      <fieldset>
        <label htmlFor="Titulo">Texto</label>
        <input type="Titulo" id="Titulo" name="Titulo" required />
      </fieldset>
      <fieldset>
        <label htmlFor="categoria">Categoria</label>
        <input type="categoria" name="categoria" id="categoria" required />
      </fieldset>
      <fieldset>
        <label htmlFor="image">Imagen (opcional)</label>
        <input type="file" id="image" name="image" accept="image/*" />
      </fieldset>
      <button>Envía Nota</button>
      {loading ? <p>Enviando Nota</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};*/
