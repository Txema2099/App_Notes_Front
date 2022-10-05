import { Nota } from "./Nota";

export const NotasList = ({ notas, removeNota }) => {
  console.log(notas);
  return notas.length ? (
    <ul>
      {notas?.map((nota, index) => (
        <li key={index} className="notas">
          <Nota nota={nota} removeNota={removeNota} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Aún no hay notas</p>
  );
};
