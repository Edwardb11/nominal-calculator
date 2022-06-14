import { db } from "../firebase/config";
import { types } from "../types/types";

export const createRegister = (pago) => {
  return async (dispatch, getState) => {
    // console.log(getState())
    const { uid } = getState().auth;

    const datos = {
      fecha: new Date().toLocaleDateString(),
      pago,
    };

    const ref = await db.collection(`${uid}/nominas/nomina`).add(datos);
    // console.log(ref);
    // console.log(  ref.get())
    const id = await ref.id;

    const newData = {
      ...datos,
      id,
    };

    dispatch(create(newData));
  };
};

export const readRegister = (data) => {
  return {
    type: types.nominaRead,
    payload: data,
  };
};

export const create = (data) => {
  return {
    type: types.nominaAdd,
    payload: data,
  };
};


export const deleteRegister = (id) => {
  return {
    type: types.nominaDelete,
    payload: id,
  };
};
