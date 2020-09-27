import React from "react";
import { getClases } from "../api/claseApi";

export default class ClasesPage extends React.Component {
  state = { clases: [] };

  componentDidMount() {
    getClases().then((data) => {
      this.setState({ clases: data });
    });
  }

  //proptypes
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Titulo </th>
            <th>Profesor </th>
            <th>Categoria </th>
          </tr>
        </thead>
        <tbody>
          {this.state.clases.map((clase) => {
            return (
              <tr>
                <td>{clase.titulo}</td>
                <td>{clase.profesorId}</td>
                <td>{clase.categoria}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
