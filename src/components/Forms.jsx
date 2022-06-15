import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRegister } from "../actions/nomina";

const Forms = () => {
  const [viewForm, setViewForm] = useState(false);
  const [money, setMoney] = useState({
    precioHoras: 0,
    horas: 0,
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
    const cantidaFinal = horas * precioHoras;
    dispatch(createRegister(cantidaFinal));
    setMoney({
      precioHoras: 0,
      horas: 0,
    });
  };

  return (
    <div>
      <button onClick={handleAdd} className="btn green ">
        {!viewForm ? "Agregar" : "Cerrar"}
      </button>
      {viewForm && (
        <div  className="animate__animated animate__fadeIn">
          <div className="input-field col s12">
            <label htmlFor="precioHoras">Pago por hora:</label>
            <input
              type="number"
              value={precioHoras}
              onChange={handleChange}
              name="precioHoras"
              id="precioHoras"
            />
          </div>
          <div className="input-field col s12">
            <label htmlFor="horas">Horas laboradas:</label>

            <input
              type="number"
              value={horas}
              onChange={handleChange}
              name="horas"
              id="horas"
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
