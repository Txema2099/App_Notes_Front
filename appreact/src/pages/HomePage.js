//*Importaciones de Hooks
import useNotes from "../hooks/useNotes";
//*Importaciones de modules
import { useContext } from "react";
//*Importciones de Componentes
import { ErrorMassage } from "../components/ErrorMessage";
import { NotesList } from "../components/NotesList";
import { NewNote } from "../components/NewNote";
//*Importacion de context
import { AuthContext } from "../context/TokenContext";

export const HomePage = () => {
  const { notes, loading, error, addNote, removeNote } = useNotes();
  const { user } = useContext(AuthContext);

  if (loading) return <p>Cargando Notas...</p>;
  if (error) return <ErrorMassage message={error} />;

  return (
    <section>
      {user ? <NewNote addNote={addNote} /> : null}
      <h1>Ultimas notas</h1>
      <NotesList notes={notes} removeNote={removeNote} />
    </section>
  );
};