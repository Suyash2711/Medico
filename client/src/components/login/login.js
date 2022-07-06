import React from "react";
import LoginImg from "../../assets/Login-image.png";
import styles from "./login.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="container-side-content">
          {/* <img src={LoginImg} /> */}
        </div>
        <div className="container-user-content">
          <div className="user-content font">
            <form>
              <h3 className="">Login</h3>
              <div className="username">
                <label className="usertext ">
                  <b>Username</b>
                </label>
                <input type="text" placeholder="Enter your username" />
              </div>
              <div className="password">
                <label className="usertext ">
                  <b>Password</b>
                </label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <div className="login-btn">
                <button>LOGIN</button>
              </div>
              <div className="issue">
                <span>
                  Don't have an account?
                  <Link to="/signup">
                    <button className="issue-btn ">
                      <b>Sign Up</b>
                    </button>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
