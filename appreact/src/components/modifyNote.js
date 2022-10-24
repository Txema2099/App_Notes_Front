//*importaciones de modules
import { useContext, useState } from "react";

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
    setIsChecked(!isChecked);
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
        <div className="Public">
          <input
            type="checkbox"
            name="active"
            id="active"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Publica(todo el mundo podra ver esta nota)
          {console.log(isChecked)}
        </div>
        <button>Modificar Nota</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>Subiendo Nota modificada...</p> : null}
      </form>
    </>
  );
};
