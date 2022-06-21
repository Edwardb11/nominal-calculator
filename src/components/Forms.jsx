import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { createRegister } from "../actions/nomina";

const Forms = () => {
  const [viewForm, setViewForm] = useState(false);
  const [money, setMoney] = useState({
    precioHoras: "",
    horas: "",
  });
  const { precioHoras, horas } = money;

  const dispatch = useDispatch();
  const handleAdd = () => {
    setViewForm(!viewForm);
  };

  const handleChange = (e) => {
    setMoney({
      ...money,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (precioHoras == 0 || horas == 0) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Por favor introduzca un número mayor que 0.",
      });
      return;
    }
    if (precioHoras === "" || horas === "") {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Los campos son requeridos.",
      });
      return;
    }
    if (precioHoras <= -1 || horas <= -1) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "No se permite introducir números negativos.",
      });
      return;
    }
    const cantidaFinal = horas * precioHoras;
    dispatch(createRegister(cantidaFinal));
    setMoney({
      precioHoras: "",
      horas: "",
    });
    Swal.fire({
      icon: "success",
      title: "Guardado.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <button onClick={handleAdd} className="btn  green  ">
        {!viewForm ? "Agregar" : "Cerrar"}
      </button>
      {viewForm && (
        <div className="animate__animated animate__fadeIn">
          <div className="input-field col s12">
            <label htmlFor="precioHoras">*Pago por hora (Mensual):</label>
            <input
              type="number"
              value={precioHoras}
              onChange={handleChange}
              name="precioHoras"
              placeholder="0"
              id="precioHoras"
              min="1"
              required
            />
          </div>
          <div className="input-field col s12">
            <label htmlFor="horas">*Horas laboradas (Mensual):</label>

            <input
              type="number"
              value={horas}
              onChange={handleChange}
              name="horas"
              placeholder="0"
              min="1"
              id="horas"
              required
            />
          </div>

          <button
            onClick={handleSave}
            className="btn waves-effect waves-light green darken-2"
          >
            Calcular y guardar
          </button>
        </div>
      )}
    </div>
  );
};

export default Forms;
