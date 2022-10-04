//*Importacion de hooks
import useNotes from "../hooks/useNotes";
//*Importacion de componentes
import { ErrorMassage } from "../components/ErrorMessage";
import { NotesList } from "./NotesList";

export const UserNotes = ({ id }) => {
  const { notes, loading, error, removeNote } = useNotes(id);

  if (loading) return <p>Cargando notas de usuario...</p>;
  if (error) return <ErrorMassage message={error} />;

  return <NotesList notes={notes} removeNote={removeNote} />;
};
