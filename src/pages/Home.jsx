import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createRegister } from "../actions/nomina";

import Navbar from "../components/Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(createRegister());
  };

  const name = useSelector((state) => state.auth.displayName);
  return (
    <>
      <Navbar />
      <div className="container ">
        <h1 className="center">Hola {name}</h1>
        <button onClick={handleAdd} className="btn green ">
          Agregar
        </button>
      </div>
    </>
  );
};

export default Home;
