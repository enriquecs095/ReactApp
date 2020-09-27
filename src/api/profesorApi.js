import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/profesores/";

export function getProfesores() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveProfesor(profesor) {
  return fetch(baseUrl + (profesor.id || ""), {
    method: profesor.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(profesor),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteProfesor(profesorId) {
  return fetch(baseUrl + profesorId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
