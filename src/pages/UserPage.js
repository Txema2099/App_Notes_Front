import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserNotes } from "../components/userNotes";
import useUser from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams;
  const { user, loading, error } = useUser(id);
  console.log(user);
  if (loading) return <p>Cargando info de Usuario</p>;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <section>
      <h1>Página de usuario</h1>
      <p>Usuario: {user.email}</p>
      <UserNotes id={user.id} />
      <p>Registrado el: {new Date(user.created_at).toLocaleString()}</p>
    </section>
  );
};
//<UserNotas id={user.id} />
