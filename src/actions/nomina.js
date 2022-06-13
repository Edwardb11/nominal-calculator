/*
{
    id:"ajjdjajajjajaajaka",
    fecha:"1/1/2000",
    pago:300.00
}
*/

import { db } from "../firebase/config";

export const createRegister = () => {
  return (distpatch, getState) => {
    // console.log(getState())
    const { uid } = getState().auth;

    const datos = {
      fecha: new Date(),
      pago: 300.0,
    };

    const ref = db.collection(`${uid}/nominas/nomina`).add(datos);
  };
};
