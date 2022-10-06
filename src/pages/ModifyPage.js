//*Importaciones de modules
import { useParams } from "react-router-dom";

//*Importaciones de componentes
import { Note } from "../components/Note";
import { ErrorMassage } from "../components/ErrorMessage";
//*Importaciones de Hooks
import useNote from "../hooks/useNote";
import { ModifyNote } from "../components/modifyNote";

export const ModifyPage = () => {
  const { id } = useParams();
  const { note, loading, error } = useNote(id);

  if (loading) return <p>Cargando Nota...</p>;
  if (error) return <ErrorMassage message={error} />;

  return (
    <section>
      <ModifyNote />
      <h1>Esta es previsualizacion de la nota que desea modifycar</h1>
      <Note note={note} />
    </section>
  );
};
