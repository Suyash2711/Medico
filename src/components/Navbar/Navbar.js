import React from 'react'
import navimg from '../../assets/1133760-e91e63.svg';
import './NavBar.css';

const Navbar = () => {
  return (
    <>
    <div className="container">
        <span className="left"> 
            <h2><a href="#MeDICO">MeDICO</a></h2>
        </span>
        <span className="center">
            <h2><a href="#img"><img src={navimg} alt="MeDICO" /></a></h2>
        </span>
        <span className="logout">
            <button>LOGOUT</button>
        </span>
    </div>
    </>
  )
}

export default Navbar