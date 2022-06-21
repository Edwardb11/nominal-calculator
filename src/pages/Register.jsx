import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../actions/auth";
import Swal from "sweetalert2";

const Register = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    // console.log(value);
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const { email, username, password, password2 } = data;
  const handleRegister = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Correo electrónico inválido. ",
      });
      return;
    }
    if (username.trim().length < 2) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "El username debe ser mayor de 2 caracteres.",
      });
      return;
    }
    if (password.trim().length < 6) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "La contraseña debe ser mayor de 6 caracteres.",
      });
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        Swal.fire({
          icon: "error",
          title: "Error...",
          text: "Las contraseñas no coinciden.",
        });
        return;
      }
    }
    Swal.fire({
      icon: "success",
      showConfirmButton: false,
      timer: 500,
    });
    dispatch(register(email, password, username));
  };
  return (
    <>
      <form
        onSubmit={handleRegister}
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
                Register
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
                id="email"
                required
              />
              <label htmlFor="email">*Email</label>
            </div>
          </div>
          <div className="col s12 m12 l12">
            <div className="input-field">
              <i className="material-icons prefix">assignment_ind</i>
              <input
                onChange={handleChange}
                value={username}
                type="text"
                name="username"
                id="username"
                required
              />
              <label htmlFor="username">*Username</label>
            </div>
          </div>
          <div className="col m12 l12">
            <div className="input-field">
              <i className="material-icons prefix">lock</i>
              <input
                onChange={handleChange}
                value={password}
                type="password"
                name="password"
                id="password"
                required
              />
              <label htmlFor="password">*Password</label>
            </div>
          </div>
          <div className="col m12 l12">
            <div className="input-field">
              <i className="material-icons prefix">lock</i>
              <input
                onChange={handleChange}
                value={password2}
                type="password"
                name="password2"
                id="password2"
                required
              />
              <label htmlFor="password2">*Confirm Password</label>
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
            <Link to="/auth/login">Login now!</Link>
          </div>
          <br />
        </div>
      </form>
    </>
  );
};

export default Register;
