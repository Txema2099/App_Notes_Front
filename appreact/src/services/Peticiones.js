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
export const getsingleNoteservices = async (id, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/notes/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
  });

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
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

//*Peticion Login
export const LoginUserServices = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

//*Peticion de datos de usuarios
export const UserDataServices = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
//*peticiones de dato de usuario en paguina de usuario
export const getUserDataService = async (id, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/users/${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
//*Peticione de las notas de un usuario
export const getUserNotesService = async (id, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACK}/users/${id}/notes`,
    {
      method: "GET",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

//*Peticion de modificar nota
export const modifyNoteService = async ({ data, token, id }) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/notes/${id}`, {
    method: "PUT",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
//*Peticion de Subir nueva nota
export const sendNoteService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/notes`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
//*Peticion de borrado de nota
export const deleteNoteService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/notes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
