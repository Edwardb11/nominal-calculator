import React from "react";
import { useDispatch } from "react-redux";
import { deleteRegister } from "../actions/nomina";
// import { db } from "../firebase/config";

const Elements = ({ data }) => {
  const dispatch = useDispatch();
  const { fecha, pago, id } = data;
  let fechaFormato;

  if (fecha.seconds) {
    const date = fecha.toDate();
    fechaFormato = date.toLocaleDateString();
  } else {
    fechaFormato = fecha;
  }
  const handleDelete = () => {
    // db.collection()
    dispatch(deleteRegister(id));
  };
  return (
    <>
      <td>{fechaFormato}</td>
      <td>{pago}</td>
      <td>
        <button onClick={handleDelete} className="btn red">
          Eliminar
        </button>
      </td>
    </>
  );
};

export default Elements;
