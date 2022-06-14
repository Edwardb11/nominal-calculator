import React from "react";

const Elements = ({ data }) => {
  const { fecha, pago } = data;
  let fechaFormato;

  if (fecha.seconds) {
    const date = fecha.toDate();
    fechaFormato = date.toLocaleDateString();
  } else {
    fechaFormato = fecha;
  }

  return (
    <>
      <td>{fechaFormato}</td>
      <td>{pago}</td>
      <td>
        <button className="btn red">Eliminar</button>
      </td>
    </>
  );
};

export default Elements;
