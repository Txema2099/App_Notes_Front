import { Nota } from "./Nota";

export const NotasList = ({ notas }) => {
  return notas.length ? (
    <ul>
      {notas.map((nota) => (
        <li key={nota.id}>
          <Nota nota={nota} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Aún no hay notas</p>
  );
};
