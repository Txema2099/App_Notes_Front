//*Importaciones de Moduloss
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/TokenContext";

//*Importaciones de peticiones(fetch)
import { getsingleNoteservices } from "../services/Peticiones";

//*hooks presonalizado
const useNote = (id) => {
  const { token } = useContext(AuthContext);
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNote = async () => {
      try {
        setLoading(true);
        //*gestion de la datos de respuesta por parte del fetch de peticiones
        const data = await getsingleNoteservices(id, token);
        setNote(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNote();
  }, [id, token]);

  return { note, loading, error };
};

export default useNote;
