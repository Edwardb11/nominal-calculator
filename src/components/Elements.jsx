import React from "react";
import { useDispatch } from "react-redux";
import { deleteRegister } from "../actions/nomina";

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
    dispatch(deleteRegister(id));
  };
  return (
    <>
      <td>{fechaFormato}</td>
      <td>${pago}</td>
      <td>
        <button onClick={handleDelete} className="btn red">
        <i className="material-icons">delete_forever</i>
        </button>
      </td>
    </>
  );
};

export default Elements;
