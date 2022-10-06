//*Importacion de hooks
import useNotes from "../hooks/useNotes";
//*Importacion de componentes
import { ErrorMessage } from "../components/ErrorMessage";
import { NotesList } from "./NotesList";

export const UserNotes = ({ id }) => {
  const { notes, loading, error, removeNote } = useNotes(id);

  if (loading) return <p>Cargando notas de usuario...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <NotesList notes={notes} removeNote={removeNote} />;
};
/*export const UserNotas = ({ id }) => {
  return <ul>Notas de usuario</ul>;
};*/
