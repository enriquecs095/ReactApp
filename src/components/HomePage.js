import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="jumbotron">
        <h1>Experiencia de usuario</h1>
        <p>Esta es la clase de las 06:40 pm</p>
        <Link to="/about">Acerca de la aplicacion</Link>
      </div>
    </>
  );
}

/*
export class HomePage2 extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Experiencia de usuario</h1>
        <p>Esta es la clase de las 06:40 pm</p>
      </div>
    );
  }
}
*/
