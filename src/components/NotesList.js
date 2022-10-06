import { Note } from "./Note";

export const NotesList = ({ notes, removeNote }) => {
  console.log(notes);
  return notes.length ? (
    <ul>
      {notes?.map((note, index) => (
        <li key={index} className="notas">
          <Note note={note} removeNota={removeNote} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Aún no hay notas</p>
  );
};
