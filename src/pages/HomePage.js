import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { NotasList } from "../components/NotasList";
import { NuevaNota } from "../components/NuevaNota";
import { AuthContext } from "../context/AuthContext";
import useNota from "../hooks/useNota";
import "./homePage.css";

export const HomePage = () => {
  const { notas, loading, error, addNota, removeNota } = useNota();
  const { user } = useContext(AuthContext);
  if (loading) return <p>Cargando notas...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main>
      {user ? <NuevaNota addNota={addNota} classname="add" /> : null}
      <h1>Ultimas notas</h1>
      <div className="chat">
        <NotasList notas={notas} removeNota={removeNota} classname="notas" />
      </div>
    </main>
  );
};
