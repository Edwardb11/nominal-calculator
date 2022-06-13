import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";


import { firebase } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import AuthRouter from "./AuthRouter";
const AppRouter = () => {
  const dispatch = useDispatch();
  const [log,setLog] = useState(false)


  // notify if the status change of the authentication
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true)
      }
      else{
        setLog(false)
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={AuthRouter}/>
        <PrivateRouter log={log} component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
