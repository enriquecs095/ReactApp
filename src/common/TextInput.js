import React from "react";

export default function TextInput(props) {
  return (
    <div className={`form-group ${props.error ? "error" : ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {props.error && (
        <em
          style={{
            float: "right",
            color: "#E05C65",
            paddingLeft: 10,
          }}
        >
          {props.error}
        </em>
      )}
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          className="form-control"
          onChange={props.onChange}
          value={props.value}
          //onChange={props.clase.titulo}
          // ref={miTitulo}
        />
      </div>
    </div>
  );
}
