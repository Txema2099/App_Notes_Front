//import { json } from "react-router-dom";
//*Peticion Lista de Notas publicas generarles
export const getallnotesservices = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/notes`);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
//*Petición Nota unica desde su id
export const getsingleNoteservices = async (id, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/notes/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
//*Petición Registro
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
};

//error 404 not found al meter un user que existe o nuevo
//*Petición Login
export const loginUserService = async ({ email, password }) => {
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

//*Petición de datos de usuarios
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
//*Petición de datos de usuario en paguina de usuario
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

//*Petició de las notas de un usuario
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
export const modifyNoteService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/notes`, {
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
  console.log(data);
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

//export const modifyNotaService = async ({ id, token }) => {
//  const response = await fetch(`${process.env.REACT_APP_BACK}/notes/${id}`, {
//    method: "PUT",
//    headers: {
//      Authorization: token,
//    },
//  });

//  const json = await response.json();

//  if (!response.ok) {
//    throw new Error(json.message);
//  }
//};
