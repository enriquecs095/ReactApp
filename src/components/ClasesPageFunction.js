import React, { useState, useEffect } from "react";
import { getClases } from "../api/claseApi";
import ClasesList from "./ClasesList";
import { Link } from "react-router-dom";

export default function ClasesPageFunction() {
  const [clases, setClases] = useState([]);

  useEffect(() => {
    getClases().then((data) => {
      setClases(data);
    });
  }, []);

  return (
    <>
      <h2>Clases Disponibles</h2>
      <Link to="/clase" className="btn btn-primary">
        Add Clase{" "}
      </Link>
      <ClasesList clases={clases}> </ClasesList>
    </>
  );
}
