import { db } from "../firebase/config";

export const loadData = async (uid) => {
  const response = await db.collection(`${uid}/nominas/nomina`).get();
  const data =[]
  console.log(response)
  return data
};
