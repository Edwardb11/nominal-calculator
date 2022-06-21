import React from "react";
import { useDispatch } from "react-redux";
import "../styles/login.css";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { googleLogin, emailAndPasswordLogin } from "../actions/auth";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    // console.log(value);
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const { email, password } = data;

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };
  const handleEmailLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      return;
    }

    if (password.trim().length < 6) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Contraseña inválida. ",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      showConfirmButton: false,
      timer: 500,
    });
    dispatch(emailAndPasswordLogin(email, password));
  };
  return (
    <>
      <form
        style={{ marginTop: 100 }}
        onSubmit={handleEmailLogin}
        className="table animate__animated animate__zoomIn"
      >
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
                Login
              </p>
            </div>
          </div>
          <div className="col s12 m12 l12">
            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                type="email"
                name="email"
                id="Email"
              />
              <label htmlFor="Email">Email</label>
            </div>
          </div>
          <div className="col m12 l12">
            <div className="input-field">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                type="password"
                name="password"
                id="password"
              />
              <label htmlFor="password">Password</label>
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
            <GoogleButton onClick={handleGoogleLogin} />
          </div>
          <div style={{ fontSize: 14, marginTop: 10 }}>
            <Link to="/auth/register">Register Now!</Link>
          </div>
          <br />
        </div>
      </form>
    </>
  );
};

export default Login;
