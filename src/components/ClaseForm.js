import React from "react";
import TextInput from "../common/TextInput";

function ClaseForm(props) {
  //const miTitulo = React.createRef();
  /*
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(miTitulo.current.value);
  };*/

  return (
    //onSubmit={handleSubmit}
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="titulo"
        type="text"
        name="titulo"
        className="form-control"
        onChange={props.onChange}
        value={props.clase.titulo}
        error={props.errors.titulo}
        //onChange={props.clase.titulo}
        // ref={miTitulo}
      />

      <div className="form-group">
        <label htmlFor="profesor">Profesor</label>
        <div className="field">
          <select
            id="profesor"
            name="profesorId"
            onChange={props.onChange}
            value={props.clase.profesorId || ""}
            error={props.errors.profesorId}
            className="form-control"
          >
            <option value="" />
            <option value="1">Juan Romero</option>
            <option value="2">Ivan Deras</option>
          </select>
        </div>
      </div>

      <TextInput
        type="text"
        id="categoria"
        name="categoria"
        className="form-control"
        onChange={props.onChange}
        value={props.clase.categoria || ""}
        error={props.errors.categoria}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default ClaseForm;
