//*importaciones de modules
import { useContext, useState } from "react";
//*Importaciones de context
import { AuthContext } from "../context/TokenContext";
//*Importaciones de peticiones fecth
import { sendNoteService } from "../services/Peticiones";

export const NewNote = ({ addNote }) => {
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      const note = await sendNoteService({ data, token });

      //*añadir a nueva nota a lostado de notas
      addNote(note);

      //*reseteo del formulario de envio de nueva nota
      e.target.reset();

      //*reseteo imagen de formulario de envio de nueva nota
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    //!modificar Titulo por titulo al reacer las tablas de mysql
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
