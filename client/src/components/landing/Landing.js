import React from 'react'
import NavbarComp from '../Navbar/Nav';
import image from '../../assets/landingPage.svg';
import styles from './landing.css';

const Landing = () => {
  return (
    <>
    <NavbarComp />
      <div className="row">
        <div className="container col-md-6">
        <img
            src={image}
            className="landingImg"
            alt="navbar-logo"
        />
        </div>
        <div className="side-content col-md-6">
          <h2 className='catchy'>CATCHY TITLE GOES HERE</h2><br/>
          <h4 className='Lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4><br/>
          <button className='explore-btn'>EXPLORE</button>
        </div>
      </div>
    </>
  )
}

export default Landing