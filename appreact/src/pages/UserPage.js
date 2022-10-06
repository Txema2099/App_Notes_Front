//*Importaciones de Module
import { useParams } from "react-router-dom";
//*Importaciones de componentes
import { ErrorMassage } from "../components/ErrorMessage";
import { UserNotes } from "../components/userNotes";
//*Importaciones de Hooks
import { useUser } from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <p>Cargando Notas de Usuario...</p>;
  if (error) return <ErrorMassage message={error} />;

  return (
    <section>
      <h1>Paguina de usuario</h1>
      <h2>Usuario: {user.email}</h2>
      <p>Registrado el: {new Date(user.created_at).toLocaleString()}</p>
      <h1>Estas son tus Notas Privadas</h1>
      <UserNotes id={user.id} />
    </section>
  );
};
