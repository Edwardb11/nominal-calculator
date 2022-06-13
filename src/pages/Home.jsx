import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";

const Home = () => {
  const name = useSelector((state) => state.auth.displayName);
  return (
    <>
      <Navbar />
      <div className="container ">
        <h1 className="center">Hola {name}</h1>
      </div>
    </>
  );
};

export default Home;
