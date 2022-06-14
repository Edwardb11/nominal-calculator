import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";


import { firebase } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import AuthRouter from "./AuthRouter";
import PublicRouter from "./PublicRouter";
import { loadData } from "../helpers/loadData";
const AppRouter = () => {
  const dispatch = useDispatch();
  const [log,setLog] = useState(false)


  // notify if the status change of the authentication
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true)
        loadData(user.uid)
      }
      else{
        setLog(false)
      }
    });
  }, [dispatch]);

  return (
    <Router>
    <Switch>
      <PublicRouter path="/auth" component={AuthRouter} log={log} />
      <PrivateRouter exact path="/" log={log} component={Home} />
    </Switch>
  </Router>
  );
};

export default AppRouter;
