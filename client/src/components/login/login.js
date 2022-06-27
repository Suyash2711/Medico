import React from 'react'
import LoginImg from '../../assets/Login-image.png';
import './login.css';

const Login = () => {
  return(
    <>
    <div className="container">
        <div className="container-side-content">
            <img src={LoginImg} />
        </div>
        <div className="container-user-content">
            <div className="user-content">
                <form action="/do-something">
                    <h2>Login</h2>
                    <div className="username">
                        <label htmlFor="username">Username : </label>
                        <input type="text" placeholder="Enter your username" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password : </label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <div className="login-btn">
                        <button>LOGIN</button>
                    </div>
                    <div className="forget">
                        <a href="#">FORGET USERNAME?</a>
                        <a href="#">FORGOT PASSWORD?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  );
}

export default Login