import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/TokenContext";
import { getsingleNoteservices } from "../services/Peticiones";

const useNotas = (id) => {
  const [note, setNote] = useState(null);
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNote = async () => {
      try {
        setLoading(true);
        const data = await getsingleNoteservices(id, token);
        console.log(data);
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

export default useNotas;
