import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRegister } from "../actions/nomina";

const Forms = () => {
  const [viewForm, setViewForm] = useState(false);
  const [money, setMoney] = useState({
      horas:0,
      precioHoras:0
  });
  const dispatch = useDispatch();
  const handleAdd = () => {
    setViewForm(!viewForm);
  };

  const handleChange = (e) => {
    setMoney(parseFloat(e.target.value));
  };

  const handleSave =()=>{
    dispatch(createRegister(money));

  }

  return (
    <div>
      <button onClick={handleAdd} className="btn green ">
        Agregar
      </button>
      {viewForm && (
        <>
          <input
            type="number"
            placeholder="Cantidad de pago por hora"
            value={money}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Cantidad de horas"
            value={money}
            onChange={handleChange}
          />
          <button onClick={handleSave} className="btn waves-effect waves-light green darken-2">Calcular y guardar</button>
        </>
      )}
    </div>
  );
};

export default Forms;
