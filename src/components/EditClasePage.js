import React, { useState } from "react";
import ClaseForm from "./ClaseForm";
import * as ClaseApi from "../api/claseApi.js";
import { toast } from "react-toastify";

export default function EditClasePage(props) {
  const [errors, setErrors] = useState({});

  const [clase, setClase] = useState({
    id: null,
    slug: "",
    titulo: "",
    profesorId: null,
    categoria: "",
  });

  function handleChange(event) {
    //const target = event.target;
    //actualizar datos
    //debugger;
    //clase.titulo = event.target.value;
    const updatedClase = { ...clase, [event.target.name]: event.target.value };
    setClase(updatedClase);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    ClaseApi.saveClase(clase).then(() => {
      props.history.push("/clases");
      toast.success("clase guardada");
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!clase.titulo) {
      _errors.titulo = "Titulo es requerido";
    }
    if (!clase.profesorId) {
      _errors.profesorId = "Profesor Id es requerido";
    }
    if (!clase.categoria) {
      _errors.categoria = "Categoria es requerido";
    }
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <>
      <h2>Administracion de Clase</h2>
      <p>{props.match.params.slug}</p>
      <ClaseForm
        errors={errors}
        clase={clase}
        onChange={handleChange}
        onSubmit={handleSubmit}
      ></ClaseForm>
    </>
  );
}
