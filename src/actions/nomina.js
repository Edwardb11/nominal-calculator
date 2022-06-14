/*
{
    id:"ajjdjajajjajaajaka",
    fecha:"1/1/2000",
    pago:300.00
}
*/

import { db } from "../firebase/config";

export const createRegister = (pago) => {
  return async (distpatch, getState) => {
    // console.log(getState())
    const { uid } = getState().auth;

    const datos = {
      fecha: new Date(),
      pago: pago,
    };

    const ref = await db.collection(`${uid}/nominas/nomina`).add(datos);
    console.log(ref);
  };
};
