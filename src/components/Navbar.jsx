import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";

const Navbar = () => {
  
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="grey darken-3">
      <div className="nav-wrapper">
        <span className="flow-text">Calculadora Nominal</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button
              onClick={handleLogout}
              className="btn red darken-4 waves-effect waves-light"
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
        <div className="nav-content right">
          <ul className=" right tabs tabs-transparent hide-on-large-only">
            <li>
              <button
                onClick={handleLogout}
                className="btn red darken-4 waves-effect waves-light"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
