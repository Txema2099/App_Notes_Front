import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Nota } from "../components/Nota";
import useNotas from "../hooks/useNotas";

export const NotaPage = () => {
  const { id } = useParams();
  const { nota, loading, error } = useNotas(id);

  if (loading) return <p>Cargando notas...</p>;
  if (error) return <ErrorMessage message={error} />;
  return (
    <section>
      <Nota nota={nota} />
    </section>
  );
};
// <h1>Nota de {nota.email}</h1>
