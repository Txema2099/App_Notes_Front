import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Note } from "../components/Note";
import useNote from "../hooks/useNote";

export const NotaPage = () => {
  const { id } = useParams();
  const { note, loading, error } = useNote(id);

  if (loading) return <p>Cargando notas...</p>;
  if (error) return <ErrorMessage message={error} />;
  return (
    <section>
      <Note note={note} />
    </section>
  );
};
// <h1>Nota de {nota.email}</h1>
