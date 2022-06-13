import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { firebase } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import AppRouter from "./AppRouter";

const AuthRouter = () => {
  const dispatch = useDispatch();

  // notify if the status change of the authentication
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <AppRouter />
      </Switch>
    </Router>
  );
};

export default AuthRouter;
