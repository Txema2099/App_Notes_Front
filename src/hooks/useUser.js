import { useEffect, useState } from "react";
import { getUserDataService } from "../services";

const useUser = (id) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
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

    loadUser();
  }, [id, setUser]);

  return { user, loading, error };
};

export default useUser;
