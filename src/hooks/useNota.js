import { useEffect, useState } from "react";
import { getAllNotasService } from "../services";

const useNota = () => {
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNotas = async () => {
      try {
        setLoading(true);
        const data = await getAllNotasService();
        setNotas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNotas();
  }, []);

  return { notas, loading, error };
};

export default useNota;
