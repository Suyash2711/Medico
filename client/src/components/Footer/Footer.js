import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
        <div className="footer">
          <div className="content">
            <div className="home">
              <a href="#">HOME</a>
            </div>
            <div className="contact">
              <a href="#">CONTACT US</a>
            </div>
            <div className="login">
              <a href="#">LOGIN</a>
            </div>
            <div className="register">
              <a href="#">REGISTER</a>
            </div>
          </div>
          <div className="icons">
            <div className="icon_space_one">
              <svg width="50" height="50">
              <rect width="50" height="50"/>
              </svg>
            </div>
            <div className="icon_space_two">
              <svg width="50" height="50">
              <rect width="50" height="50"/>
              </svg>
            </div>
            <div className="icon_space_three">
              <svg width="50" height="50">
              <rect width="50" height="50"/>
              </svg>
            </div>
          </div>
        </div>
    )
}

export default Footer
