import React from "react";
import Elements from "./Elements";
import { useSelector } from "react-redux";

const Table = () => {
  const data = useSelector((state) => state.nomina.data);
//   console.log(data);
  return (
    <table className="striped">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Cantidad</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr className="animate__animated animate__fadeInUp" key={row.id}>
              <Elements data={row} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
