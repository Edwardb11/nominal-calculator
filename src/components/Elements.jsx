import React from "react";

const Elements = ({ data }) => {
  const { fecha, pago } = data;
  // console.log('data', data)
  const date = fecha.toDate();
  // const fechaFormato = `${date.getFullYear()}-${date.getDay()}-${date.getMonth()}`
  const fechaFormato = date.toLocaleDateString();
  // console.log(fechaFormato)
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
