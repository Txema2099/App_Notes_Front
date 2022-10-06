import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/TokenContext";
import {
  getallnotesservices,
  getUserNotesService,
} from "../services/Peticiones";

const useNotes = (id) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        setLoading(true);
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
    setNotes(notes.filter)((nota) => nota.id !== id);
  };

  return { notes, loading, error, addNote, removeNote };
};

export default useNotes;

//const modNota = (id) => {
//  setNotas(notas.filter)((nota) => nota.id !== id);
//};
