import React from "react";
import "./patient.css";
import DashNavbar from "./dashNavbar";

const Patient = () => {
  return (
    <>
      <DashNavbar />
      <div className="container">
        <div className="profile_details">
          <div className="photo">
            <svg height="200" width="250">
              <circle
                cx="150"
                cy="90"
                r="68"
                stroke="black"
                strokeWidth="3"
                fill="white"
              />
            </svg>
            <div className="name">
              <h1>SUYASH NIGAM</h1>
              <h1>AGE : 30</h1>
            </div>
          </div>
          <hr className="hrline" />
          <div className="details">
            <ul>
              <li>Gender - </li>
              <li>Male</li>
            </ul>
            <ul>
              <li>Blood - </li>
              <li>B+</li>
            </ul>
            <ul>
              <li>Allergies - </li>
              <li>Milk</li>
            </ul>
            <ul>
              <li>Diseases - </li>
              <li>Diabetes</li>
            </ul>
            <ul>
              <li>Weight-</li>
              <li>80KG</li>
            </ul>
            <ul>
              <li>Height-</li>
              <li>180CM</li>
            </ul>
          </div>
        </div>
        <div className="medical_details">
          <div className="item1">
            <h2>Lorem ipsum dolor sit amet.</h2>
          </div>
          <div className="item2">
            <h2>Lorem, ipsum dolor.</h2>
          </div>
          <div className="item3">
            <h2>Lorem, ipsum dolor.</h2>
          </div>
          <div className="item4">
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              autem facere pariatur velit, ab beatae deleniti fugiat sapiente
              architecto dolore!
            </h2>
          </div>
          <div className="item5">
            <h2>Lorem, ipsum.</h2>
          </div>
          <div className="item6">
            <h2>Lorem, ipsum dolor.</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
