import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
    </Switch>
  );
};

export default AppRouter;
