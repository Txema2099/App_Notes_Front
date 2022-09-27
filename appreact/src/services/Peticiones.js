//*Peticion Lista de Notas publicas generarles
export const getallnotesservices = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/notes`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

//*Peticion Nota unica desde su id
export const getsingleNoteservices = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/notes/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

//*Peticion Registro
export const NewUserRegisterServices = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
