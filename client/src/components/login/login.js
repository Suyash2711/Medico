import React, { useEffect, useState } from "react";
import LoginImg from "../../assets/Login-image.png";
import "./login.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push(`/dashboard`);
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userId", data.id);
      window.location.href = `/dashboard`;
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <>
      <div className="container">
        <div className="container-side-content">
          {/* <img src={LoginImg} /> */}
          <div className={`login`}>
            <div className="inner">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                data-interval="100"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201909/boy-330582_960_720-x640.jpg?LmD0LKbk6ek.kT8UFhoKiDkpTFtjPQBZ"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="http://www.themetrognome.in/wp-content/uploads/2015/03/Lost-children-of-India.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://mc.webpcache.epapr.in/pro.php?size=large&in=https://mcmscache.epapr.in/post_images/website_326/post_26593969/full.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-user-content">
          <div className="user-content font">
            <form onSubmit={loginHandler}>
              <h3 className="">Login</h3>
              <div className="username">
                <label className="usertext ">
                  <b>Email Id</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="password">
                <label className="usertext ">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="login-btn">
                <button>LOGIN</button>
              </div>
              <div className="issue">
                <span>
                  Don't have an account?
                  <Link to="/signup">
                    <button className="issue-btn " type="submit">
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
