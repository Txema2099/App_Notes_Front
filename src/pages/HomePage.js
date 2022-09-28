import { ErrorMessage } from "../components/ErrorMessage";
import { NotasList } from "../components/NotasList";
import useNota from "../hooks/useNota";

export const HomePage = () => {
  const { notas, loading, error } = useNota();
  //console.log(notas, loading, error);
  if (loading) return <p>Cargando notas...</p>;
  if (error) return <ErrorMessage message={error} />;
  console.log(notas);
  return (
    <section>
      <h1>Ultimas notas</h1>
      <NotasList notas={notas} />
    </section>
  );
};
