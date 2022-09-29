import { json } from "react-router-dom";

export const getAllNotasService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/notes`);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sigleNotaService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/notes/${id}`);
  const json = await response.json;
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const registerUserservice = async ({ email, password }) => {
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

export const logInUserService = async ({ email, password }) => {
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

export const geyMyUserDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACK}/users`, {
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

export const sendNotaService = async ({ data, token }) => {
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

//Línea 2 (`${process.env.REACT_APP_BACK}/notes`)

//mod
//const response = await fetch(`${process.env.REACT_APP_BACK}/users`,
//`${process.env.REACT_APP_BACKEND}/user/${id}/tweets`
