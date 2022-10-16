//*importaciones de modules
import { useContext, useState } from "react";
//import { useParams } from "react-router-dom";
//*Importaciones de context
import { AuthContext } from "../context/TokenContext";
//*Importaciones de peticiones fecth
import { modifyNoteService } from "../services/Peticiones";

export const ModifyNote = ({ id }) => {
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(isChecked);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      await modifyNoteService({ data, token, id });

      //*reseteo del formulario de envio la modificacion de la nota
      e.target.reset();

      //*reseteo imagen de formulario de envio de modificacion de nota
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
      <h1>Modificar esta nota</h1>
      <form className="Modify-note" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="titulo">Titulo</label>
          <input type="titulo" name="titulo" id="titulo" required />
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
        <fieldset>
          <label htmlFor="active">
            Publica(todo el mundo podra ver esta nota)
          </label>
          <input
            type="checkbox"
            name="active"
            id="active"
            checked={isChecked}
            onChange={handleOnChange}
          />
        </fieldset>
        <button>Modificar Nota</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>Subiendo Nota modificada...</p> : null}
      </form>
    </>
  );
};

/*
const { id } = useParams;
    try {
      setLoading(true);
      const data = new FormData(e.target);
      await modifyNoteService({ data, token, id });

      //*reseteo del formulario de envio la modificacion de la nota
      e.target.reset();

      //*reseteo imagen de formulario de envio de nueva nota
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    */
