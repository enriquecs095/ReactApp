import React, { useState } from "react";

export default function ButtonIncrement() {
  const [sumar, setSumar] = useState(0);

  function Aumentar() {
    setSumar(sumar + 1);
  }

  return <button onClick={Aumentar}>{sumar}</button>;
}
