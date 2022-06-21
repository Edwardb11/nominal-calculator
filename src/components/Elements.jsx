import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
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
    Swal.fire({
      title: "¿Estás seguro de eliminar este registro?",
      text: "Si eliminas este registro no habrá forma de recuperarlo.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "Sé ha eliminado correctamente.",
          showConfirmButton: false,
          timer: 1000,
        });
        dispatch(deleteRegister(id));
      }
    });
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
