//*Importaciones de componentes
import { Note } from "./Note";

export const NotesList = ({ notes }) => {
  return notes.length ? (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no notes yet...</p>
  );
};
