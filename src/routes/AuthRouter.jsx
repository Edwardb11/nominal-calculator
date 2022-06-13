import React from "react";
import { Redirect, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthRouter = () => {
  return (
    <>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/register" component={Register} /> 
      <Redirect to="/auth/login"/>
    </>
  );
};

export default AuthRouter;
