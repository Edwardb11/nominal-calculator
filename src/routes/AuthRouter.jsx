import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthRouter = () => {
  return (
    <>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} /> 
    </>
  );
};

export default AuthRouter;
