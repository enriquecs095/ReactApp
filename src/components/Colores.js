import React, { useState, useEffect } from "react";

export default function Colores() {
  const [colors, setColor] = useState(1000);

  const colores = {
    gris: "lightgray",
    verde: "lightgreen",
    rojo: "lightcoral",
    azul: "deepskyblue",
  };

  function getIndex(number) {
    let index = number % 4;
    if (index === 0) return "gris";
    if (index === 1) return "verde";
    if (index === 2) return "rojo";
    if (index === 3) return "azul";
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setColor(colors - 1);
    }, 1000);
    if (color === 0) {
    }
    return () => {
      clearTimeout(timerId);
    };
  });

  return <em style={{ background: colores[getIndex(colors)] }}>{colors}</em>;
}
