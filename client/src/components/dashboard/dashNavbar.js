import React from "react";
import "./dashNavbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const DashNavbar = () => {
  return (
    <nav className="navbar navbar-light justify-content-between">
      <a href="/">
        <button
          className="navbar-brand"
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "25px",
            cursor: "pointer",
          }}
        >
          MeDICO
        </button>
      </a>

      <form className="form-inline">
        <a href="/">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            LOGOUT
          </button>
        </a>
      </form>
    </nav>
  );
};

export default DashNavbar;
