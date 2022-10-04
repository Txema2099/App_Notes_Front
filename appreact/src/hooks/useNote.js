//*Importaciones de Moduloss
import { useEffect, useState } from "react";

//*Importaciones de peticiones(fetch)
import { getsingleNoteservices } from "../services/Peticiones";

//*hooks presonalizado
const useNote = (id) => {
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNote = async () => {
      try {
        setLoading(true);
        //*gestion de la datos de respuesta por parte del fetch de peticiones
        const data = await getsingleNoteservices(id);
        setNote(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNote();
  }, [id]);

  return { note, loading, error };
};

export default useNote;
