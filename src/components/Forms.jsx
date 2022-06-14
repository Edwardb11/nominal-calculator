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
  };

  return (
    <div>
      <button onClick={handleAdd} className="btn green ">
        {!viewForm ? "Agregar" : "Cerrar"}
      </button>
      {viewForm && (
        <>
          <input
            type="number"
            placeholder="Cantidad de pago por hora"
            value={precioHoras}
            onChange={handleChange}
            name="precioHoras"
          />
          <input
            type="number"
            placeholder="Cantidad de horas"
            value={horas}
            onChange={handleChange}
            name="horas"
          />
          <button
            onClick={handleSave}
            className="btn waves-effect waves-light green darken-2"
          >
            Calcular y guardar
          </button>
        </>
      )}
    </div>
  );
};

export default Forms;
