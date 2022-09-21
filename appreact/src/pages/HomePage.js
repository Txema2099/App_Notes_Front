//*importaciones de Hooks
import { NotesList } from "../components/NotesList";
import useNotes from "../hooks/useNotes";

export const HomePage = () => {
  const { notes, loading, error } = useNotes();
  if (loading) return <p>Cargando Notas...</p>;
  if (error) return <p>{error}</p>;
  return (
    <section>
      <h1>Ultimas notas</h1>
      <p>Listado últimas notas</p>
      <NotesList notes={notes} />
    </section>
  );
};
