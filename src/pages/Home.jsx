import React from "react";

import { useSelector } from "react-redux";
import Forms from "../components/Forms";

import Navbar from "../components/Navbar";
import Table from "../components/Table";

const Home = () => {
  const name = useSelector((state) => state.auth.displayName);
  return (
    <>
      <Navbar />
      <div className="container ">
        <h1 className="center">Hola {name}</h1>
        <Forms />
        <Table/>
      </div>
    </>
  );
};

export default Home;
