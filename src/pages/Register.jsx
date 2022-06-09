import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Register = () => {
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
              <p style={{ textTransform: "uppercase", fontWeight: 500 }}>
                Register
              </p>
            </div>
          </div>
          <div className="col s12 m12 l12">
            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <input type="email" name="Email" id="Email" />
              <label htmlFor="Email">Email</label>
            </div>
          </div>
          <div className="col s12 m12 l12">
            <div className="input-field">
              <i className="material-icons prefix">assignment_ind</i>
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
          <div className="col m12 l12">
            <div className="input-field">
              <i className="material-icons prefix">lock</i>
              <input type="password" name="password2" id="password2" />
              <label htmlFor="password2">Confirm Password</label>
            </div>
          </div>
          <div className="center">
            <input
              type="submit"
              defaultValue="Login"
              name="login"
              className="btn waves-effect waves-light "
              style={{
                width: "100%",
                backgroundColor: "#6177DF",
                marginBottom: 10,
                color: "white",
              }}
            />
          </div>
          <div style={{ fontSize: 14, marginTop: 10 }}>
            <Link to="/login">Login now!</Link>
          </div>
          <br />
        </div>
      </form>
    </>
  );
};

export default Register;
