//*Importaciones de modules
import { useParams } from "react-router-dom";

//*Importaciones de componentes
import { ErrorMassage } from "../components/ErrorMessage";
import { Note } from "../components/Note";

//*Importaciones de hooks
import useNote from "../hooks/useNote";

export const NotaPage = () => {
  const { id } = useParams();
  const { note, loading, error } = useNote(id);

  if (loading) return <p>Cargando Nota...</p>;
  if (error) return <ErrorMassage message={error} />;

  //!revisara la autorizacion de notas para publica y no publina y aurotizacion user
  return (
    <section>
      <Note note={note} className="notas" />
    </section>
  );
};
