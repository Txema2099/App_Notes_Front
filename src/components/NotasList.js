import { Nota } from "./Nota";

export const NotasList = ({ notas, removeNota }) => {
  return notas.length ? (
    <ul>
      {notas.map((nota) => (
        <li key={nota.id}>
          <Nota nota={nota} removeNota={removeNota} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Aún no hay notas</p>
  );
};
