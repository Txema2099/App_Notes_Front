import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendNotaService } from "../services";
//si no paso addNota como fx({}) en linea 6 no me tira los errores

export const NuevaNota = ({ addNota }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      const data = new FormData(e.target);
      const nota = await sendNotaService({ data, token });
      addNota(nota);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };
  return (
    <form onSubmit={handleForm}>
      <h1>Añade nueva Nota</h1>
      <fieldset>
        <label htmlFor="text">Texto</label>
        <input type="text" id="text" name="text" required />
      </fieldset>
      <fieldset>
        <label htmlFor="image">Imagen (opcional)</label>
        <input type="file" id="image" name="image" accept="image/*" />
      </fieldset>
      <button>Envía Nota</button>
      {sending ? <p>Enviando Nota</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
