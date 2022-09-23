//*Importaciones de Hooks
import useNotes from "../hooks/useNotes";

//*Importciones de Componentes
import { ErrorMassage } from "../components/ErrorMessage";
import { NotesList } from "../components/NotesList";

export const HomePage = () => {
  const { notes, loading, error } = useNotes();

  if (loading) return <p>Cargando Notas...</p>;
  if (error) return <ErrorMassage message={error} />;

  return (
    <section>
      <h1>Ultimas notas publicas</h1>

      <NotesList notes={notes} />
    </section>
  );
};
