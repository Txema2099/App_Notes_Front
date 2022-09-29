import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { NotasList } from "../components/NotasList";
import { NuevaNota } from "../components/NuevaNota";
import { AuthContext } from "../context/AuthContext";
import useNota from "../hooks/useNota";

export const HomePage = () => {
  const { notas, loading, error, addNota } = useNota();
  const { user } = useContext(AuthContext);
  if (loading) return <p>Cargando notas...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {user ? <NuevaNota addNota={addNota} /> : null}
      <h1>Ultimas notas</h1>
      <NotasList notas={notas} />
    </section>
  );
};
