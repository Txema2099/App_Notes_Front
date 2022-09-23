//*Importaciones de Moduloss
import { useEffect, useState } from "react";

//*importaciones de fetch Services
import { getallnotesservices } from "../services/Peticiones";

//*hooks presonalizado
const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNotes = async () => {
      try {
        setLoading(true);
        //*gestion de la datos de respuesta por parte del fetch de peticiones
        const data = await getallnotesservices();
        setNotes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNotes();
  }, []);

  return { notes, loading, error };
};

export default useNotes;
