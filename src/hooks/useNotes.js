//*Importaciones de Moduloss
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/TokenContext";

//*importaciones de fetch Services
import {
  getallnotesservices,
  getUserNotesService,
} from "../services/Peticiones";

//*hooks presonalizado
const useNotes = (id) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        setLoading(true);
        //*gestion de la datos de respuesta por parte del fetch de peticiones

        const data = id
          ? await getUserNotesService(id, token)
          : await getallnotesservices();
        setNotes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNotes();
  }, [id, token]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return { notes, loading, error, addNote, removeNote };
};

export default useNotes;
