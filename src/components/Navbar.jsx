import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { logout } from "../actions/auth";
import { clean } from "../actions/nomina";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro de cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clean());
        dispatch(logout());
      }
    });
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
