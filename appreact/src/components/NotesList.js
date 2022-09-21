import { note } from "./Note";

export const NotesList = ({ notes }) => {
  return notes.length ? (
    <ul>
      {note.map((note) => (
        <li key={note.id}>
          <note note={note} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no notes yet...</p>
  );
};
