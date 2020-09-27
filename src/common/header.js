import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeClass = { color: "orange" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeClass}>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="/clases" activeStyle={activeClass}>
        Clases
      </NavLink>{" "}
      |{" "}
      <NavLink to="/about" activeStyle={activeClass}>
        About
      </NavLink>{" "}
      |{" "}
      <NavLink to="/apis" activeStyle={activeClass}>
        APIS
      </NavLink>
    </nav>
  );
}
