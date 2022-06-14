import { db } from "../firebase/config";

export const loadData = async (uid) => {
  const response = await db.collection(`${uid}/nominas/nomina`).get();
  const data = [];
  //   metodo de firebase
  response.forEach((nomina) => {
    const nominaData = nomina.data();
    data.push({ id: nomina.id, ...nominaData });
  });
  console.log(data)
  return data;
};
