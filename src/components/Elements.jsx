import React from "react";

const Elements = ({ data }) => {
  const { fecha, pago } = data;
  console.log('data', data)

  return (
    <tr>
      <td>{new Date().setTime(fecha.seconds)}</td>
      <td>{pago}</td>
      <td><button className="btn red">Eliminar</button></td>
    </tr>
  );
};

export default Elements;
