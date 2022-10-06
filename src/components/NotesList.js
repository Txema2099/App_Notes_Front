//*Importaciones de componentes
import { Note } from "./Note";

export const NotesList = ({ notes, removeNote }) => {
  return notes.length ? (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <Note note={note} removeNote={removeNote} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no notes yet...</p>
  );
};
