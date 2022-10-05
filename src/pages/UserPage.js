import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserNotas } from "../components/UserNotas";
import useUser from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams;
  const { user, loading, error } = useUser(id);
  console.log(user);
  if (loading) return <p>Cargando info de Usuario</p>;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <section>
      <h1>Ususario {user.email}</h1>
      <p>User id: {user.id}</p>
      <UserNotas id={user.id} />
      <p>Registered on {new Date(user.created_at).toLocaleString()}</p>
    </section>
  );
};
//<UserNotas id={user.id} />
