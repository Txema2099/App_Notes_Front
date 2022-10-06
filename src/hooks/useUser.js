import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/TokenContext";
import { getUserDataService } from "../services/Peticiones";

export const useUser = (id) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const LoadUser = async () => {
      try {
        setLoading(true);
        const data = await getUserDataService(id, token);
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    LoadUser();
  }, [id, token]);

  return { user, loading, error };
};
