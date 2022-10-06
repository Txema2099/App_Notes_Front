import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { NotesList } from "../components/NotesList";
import { NewNote } from "../components/NewNote";
import { AuthContext } from "../context/TokenContext";
import useNotes from "../hooks/useNotes";
import "./homePage.css";

export const HomePage = () => {
  const { notes, loading, error, addNote, removeNote } = useNotes();
  const { user } = useContext(AuthContext);
  if (loading) return <p>Cargando notas...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main>
      {user ? <NewNote addNote={addNote} classname="add" /> : null}
      <h1>Ultimas notas</h1>
      <div className="chat">
        <NotesList notes={notes} removeNote={removeNote} />
      </div>
    </main>
  );
};
