import React from "react";
import NavbarComp from "../navbar/Nav";
import image from "../../assets/landingPage.svg";
import "./landing.css";
import blob1 from "../../assets/blob1.png";
import blob2 from "../../assets/blob2.png";
import blob3 from "../../assets/blob3.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "../navbar/navbar";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <div className="row">
        <div className="col-lg-6">
          <img src={image} className="landingImg" alt="navbar-logo" />
        </div>

        <img className="blob1" src={blob1} />
        <img className="blob2" src={blob2} />
        <img className="blob3" src={blob3} />

        <div className="side-content col-lg-6">
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
    </div>
  );
};

export default Landing;
