import { useEffect, useState } from "react";
import { sigleNotaService } from "../services";

const useNotas = (id) => {
  const [nota, setNota] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNota = async () => {
      try {
        setLoading(true);
        const data = await sigleNotaService(id);
        setNota(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNota();
  }, [id]);
  return { nota, loading, error };
};

export default useNotas;
