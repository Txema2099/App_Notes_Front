//*Importaciones de componentes
import { Note } from "./Note";
import "./NotesList.css";

export const NotesList = ({ notes, removeNote }) => {
  return notes.length ? (
    <ul className="list">
      {notes.map((note, index) => (
        <li key={index}>
          <Note note={note} removeNote={removeNote} className="noteslist" />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no notes yet...</p>
  );
};
