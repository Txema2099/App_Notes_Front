import { useEffect, useState } from "react";
import { getUserDataService } from "../services/Peticiones";

export const useUser = (id) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const LoadUser = async () => {
      try {
        setLoading(true);
        const data = await getUserDataService(id);
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    LoadUser();
  }, [id]);

  return { user, loading, error };
};
