import React from "react";
import "../styles/login.css";
const Login = () => {
  return (
    <>
      <form>
        <div className="card-panel z-depth-5">
          <div className="row margin">
            <div className="col s12 m12 l12 center">
              <img
                src="https://i.imgur.com/ypAbAYt.png"
                alt=""
                className="responsive-img circle"
                style={{ width: 100 }}
              />
              <p>Login</p>
            </div>
          </div>
          <div className="col s12 m12 l12">
            <div className="input-field">
              <i className="material-icons prefix">person</i>
              <input type="text" name="username" id="username" />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="col m12 l12">
            <div className="input-field">
              <i className="material-icons prefix">lock</i>
              <input type="password" name="password" id="password" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="center">
            <input
              type="submit"
              defaultValue="Login"
              name="login"
              className="btn waves-effect waves-light "
              style={{ width: "100%", backgroundColor: "#ff4081" }}
            />
          </div>
          <div
            style={{ fontSize: 14, marginTop: 10, marginBottom: 15 }}
          >
            <a href="#" className="left">
              Register Now!
            </a>
            <a href="#" className="right">
              Forgot Password?
            </a>
          </div>
          <br />
        </div>
      </form>
    </>
  );
};

export default Login;
