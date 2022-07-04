import React from "react";
import NavbarComp from "../Navbar/Nav";
import image from "../../assets/landingPage.svg";
import "./landing.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <NavbarComp />
      <div className="row">
        <div className="container col-md-6">
          <img src={image} className="landingImg" alt="navbar-logo" />
        </div>
        <div className="side-content col-md-6">
          <h2 className="catchy">CATCHY TITLE GOES HERE</h2>
          <br />
          <h4 className="Lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
          <br />
          <Link to="/explore">
            <button className="explore-btn">EXPLORE</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
