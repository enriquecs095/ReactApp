import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/clases/";

export function getClases() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getClaseBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((clases) => {
        if (clases.length !== 1) throw new Error("Course not found: " + slug);
        return clases[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveClase(clase) {
  return fetch(baseUrl + (clase.id || ""), {
    method: clase.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...clase,
      // Parse authorId to a number (in case it was sent as a string).
      authorId: parseInt(clase.profesorId, 10),
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteClase(claseId) {
  return fetch(baseUrl + claseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
