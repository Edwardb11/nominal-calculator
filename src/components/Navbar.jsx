import React from "react";
import  '../styles/Navbar.css'
const Navbar = () => {

  return (
    <nav className=" teal lighten-1">
      <div className="nav-wrapper">
        <span className="brand-logo">Calculadora Nominal</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button
              className="btn red darken-2 waves-effect waves-light"
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
