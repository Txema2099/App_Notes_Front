import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sigleNotaService } from "../services";

const useNotas = (id) => {
  const [nota, setNota] = useState(null);
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNota = async () => {
      try {
        setLoading(true);
        const data = await sigleNotaService(id, token);
        console.log(data);
        setNota(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNota();
  }, [id, token]);
  return { nota, loading, error };
};

export default useNotas;
